Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :playlists
    
    # spotify auth
    get '/auth/login', to: 'auth#spotify_request'
    get '/auth/spotify/callback', to: 'sessions#create'

    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
  end

end
