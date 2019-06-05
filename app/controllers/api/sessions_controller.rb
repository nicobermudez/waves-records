require 'pry'
require 'rest-client'

class Api::SessionsController < ApplicationController
  # skip_before_action :authorized, only: [:create]

  def create
    if params[:error]
      binding.pry
    else
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




    if @user
      render json: @user
    else
      render json: {
        error: "Invalid Credentials"
      }, status: :unauthorized
    end
  end

  def delete
  end

  # private

  # def auth
  #   request.env['omniauth.auth']
  # end

end
