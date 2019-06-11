Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :playlists
    resources :photos

    # spotify auth
    get '/auth/login', to: 'auth#spotify_request'
    get '/auth/spotify/callback', to: 'sessions#create'
    get '/login', to: 'sessions#create'
    post '/login', to: 'sessions#create'
    get '/logout', to: 'sessions#destroy'

    # current user
    get '/get_current_user', to: 'sessions#get_current_user'
  end

end
