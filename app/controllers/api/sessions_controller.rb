
require 'rest-client'

class Api::SessionsController < ApplicationController

  def create
    if params[:error]
      render json: {error: "Invalid credentials"}
    else

      # Authorize user from Spotify and store session
      body = {
        grant_type: "authorization_code",
        code: params[:code],
        redirect_uri: "https://sheltered-waters-54715.herokuapp.com/api/auth/spotify/callback",
        client_id: ENV["SPOTIFY_ID"],
        client_secret: ENV["SPOTIFY_SECRET"]
      }
      auth_response = RestClient.post("https://accounts.spotify.com/api/token", body)
      auth_params = JSON.parse(auth_response.body)

      header = {
        Authorization: "Bearer #{auth_params["access_token"]}"
      }
      user_response = RestClient.get("https://api.spotify.com/v1/me", header)
      user_params = JSON.parse(user_response.body)

      @user = User.find_or_create_by(spotify_id: user_params['uid']) do |u|
        u.name = user_params["display_name"]
        u.image = user_params["images"][0]["url"]
        u.spotify_url = user_params["href"]
      end
      @user.update(access_token: auth_params["access_token"], refresh_token: auth_params["refresh_token"], expires_in: auth_params["expires_in"], login_time: Time.now)
    end

    session[:user_id] = @user.id
    redirect_to "https://wavesrecords.netlify.com"
  end

  def destroy
    session.clear
    redirect_to "https://wavesrecords.netlify.com"
  end


  def get_current_user
    if logged_in? && !token_expired?
      render json: {
        user: UserSerializer.new(active_user)
      }, status: :ok
    elsif logged_in? && token_expired?
      redirect_to api_logout_path
    else
      render json: {error: "No current user"}
    end
  end

end
