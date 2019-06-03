require 'pry'

class Api::PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.all
    render json: @playlists
  end

  def show
    @playlist = Playlist.find(params[:id])
    render json: @playlist
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
