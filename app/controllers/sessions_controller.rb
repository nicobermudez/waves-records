require 'pry'
class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    binding.pry
    @user = User.find_or_create_by(spotify_id: auth['uid']) do |u|
      u.name = auth.info.name
      u.image = auth.info.image
      u.spotify_url = auth.info.urls.spotify
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

  private

  def auth
    request.env['omniauth.auth']
  end

end
