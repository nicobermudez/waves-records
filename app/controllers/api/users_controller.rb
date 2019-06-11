class Api::UsersController < ApplicationController

  def index
    @user = active_user
    render json: @user
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
