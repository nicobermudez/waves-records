require 'pry'
class UsersController < ApplicationController

  def index
    render json: User.all

  end

  def show
    render json: User.find(params[:id])
  end

  def authenticate
    redirect_to 'auth/spotify' if params[:type] == 'spotify'
  end

  # def create
  #   @user = User.find_or_create_by(uid: auth['uid']) do |u|
  #     u.name = auth['info']['name']
  #   end
  #
  #   # update and refresh user tokens
  #   if @user.access_token_expired?
  #     @user.refresh_access_token
  #   else
  #     @user.update(
  #       access_token: auth_params["access_token"],
  #       refresh_token: auth_params["refresh_token"]
  #     )
  #   end
  #   redirect_to "http://localhost:3001/home"
  # end

  def auth
    request.env['omniauth.auth']
  end

  private

  def user_params
    params.require(:playlist).permit(
      :name,
      :spotify_url,
      :spotify_id,
      :access_token,
      :refresh_token
    )
  end
end
