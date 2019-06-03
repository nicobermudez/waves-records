require 'pry'

class PlaylistsController < ApplicationController

  def index
    binding.pry
    render json: Playlist.all
  end

  def show
    render json: Playlist.find(params[:id])
  end

  private

  def playlist_params
    params.require(:playlist).permit(
      :name,
      :href,
      :image
    )
  end
end
