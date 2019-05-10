class PlaylistController < ApplicationController

  def index
    render json: Playlist.all
  end

  def show
    render json: Playlist.find(params[:id])
  end

  private
  # params.require()
end
