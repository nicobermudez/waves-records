require 'pry'
class Api::UsersController < ApplicationController

  def index
    render json: @user
  end

  def edit
    binding.pry
  end

  private

  def user_params
    params.require(:user).permit(
      :name,
      :spotify_url,
      :spotify_id,
      :access_token,
      :refresh_token
    )
  end
end
