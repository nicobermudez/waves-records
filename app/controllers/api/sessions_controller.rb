require 'pry'
require 'rest-client'

class Api::SessionsController < ApplicationController
  # skip_before_action :authorized, only: [:create]

  def create
    if params[:error]
      binding.pry

    else
      # Authorize user from Spotify and store JWT Token
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
    token = encode_token(id: @user.id)

    response_query_params = {
      jwt: token,
      name: @user.name,
      image: @user.image,
      spotify_url: @user.spotify_url,
      token: @user.access_token
    }

    url = "http://localhost:3001/"

    redirect_to "#{url}?#{response_query_params.to_query}"
  end

  def delete
  end

  # ???
  # def logged_in
  #   active_user ? (render json: UserSerializer.new(active_user), status: 200) : (render json: {message: "User not found"}, status: 404)
  # end

end
