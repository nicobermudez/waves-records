class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  private

  def user_params
    params.require(:playlist).permit(
      :name,
      :spotify_url,
      :spotify_id
    )
  end
end
