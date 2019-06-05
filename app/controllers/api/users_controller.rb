require 'pry'
class Api::UsersController < ApplicationController

  def index
      render json: User.all
    end
  end

  def show
    render json: User.find(params[:id])
  end

  # def authenticate
  #   redirect_to 'auth/spotify' if params[:type] == 'spotify'
  # end

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
