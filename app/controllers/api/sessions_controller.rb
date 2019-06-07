require 'pry'
require 'rest-client'

class Api::SessionsController < ApplicationController

  def create
    if params[:error]
      binding.pry

    else
      # Authorize user from Spotify and store session
      body = {
        grant_type: "authorization_code",
        code: params[:code],
        redirect_uri: "http://localhost:3000/api/auth/spotify/callback",
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
      @user.update(access_token: auth_params["access_token"], refresh_token: auth_params["refresh_token"])
    end

    session[:user_id] = @user.id
    redirect_to "http://localhost:3001"
  end

  def destroy
    session.clear
    redirect_to "http://localhost:3001"
  end


  def get_current_user
    if logged_in?
      render json: {
        user: UserSerializer.new(active_user)
      }, status: :ok
    else
      render json: {error: "No current user"}
    end
  end

end
