require 'pry'

class Api::PlaylistsController < ApplicationController

  def index
    if logged_in?
      @playlists = active_user.playlists
      render json: @playlists
    end
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
