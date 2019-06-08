require 'pry'

class Api::PlaylistsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if logged_in?
      @user = active_user
      @playlists = @user.playlists
      render json: @playlists
    else
      render json: {error: "Invalid request"}
    end
  end

  def create
    @playlist = Playlist.find_or_create_by(playlist_params)
    @user = active_user
    if logged_in? && !@user.playlists.include?(@playlist)
      @user.playlists << @playlist
      render json: @playlist
    else
      render json: {error: "Invalid attempt to add playlist"}
    end
  end

  def destroy
    @playlist = Playlist.find_by(id: params[:id])
    @user = active_user
    if logged_in?
      @user.playlists.delete(@playlist)
      render json: @user.playlists
    else
      render json: {error: "Unable to delete"}
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
