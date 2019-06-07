require 'pry'

class Api::PlaylistsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @playlists = Playlist.all
    render json: @playlists
  end

  def create
    if logged_in?
      @user = active_user
      @playlist = Playlist.find_or_create_by(playlist_params)
      @user.playlists << @playlist if !@user.playlists.include?(@playlist)
      @playlists = @user.playlists
      render json: @playlists
    else
      render json: {error: "You do not have permission to add a new playlist"}
    end
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
