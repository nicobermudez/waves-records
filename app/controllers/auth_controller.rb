require 'pry'
class AuthController < ApplicationController



    # def spotify_request
    #   url = "https://accounts.spotify.com/authorize"
    #
    #   query_params = {
    #     client_id: ENV['SPOTIFY_ID'],
    #     response_type: 'code',
    #     redirect_uri: 'https://localhost:3000/auth/spotify/callback',
    #     scope: "user-library-read
    #     playlist-read-collaborative
    #     playlist-modify-private
    #     user-modify-playback-state
    #     user-read-private
    #     user-top-read
    #     playlist-modify-public",
    #     show_dialog: true
    #   }
    #   redirect_to "#{url}?#{query_params.to_query}"
    # end

    # def auth
    #   request.env['omniauth.auth']
    # end
end
