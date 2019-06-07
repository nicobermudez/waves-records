Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :playlists

    # spotify auth
    get '/auth/login', to: 'auth#spotify_request'
    get '/auth/spotify/callback', to: 'sessions#create'

    get '/login', to: 'sessions#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    get '/get_current_user', to: 'sessions#get_current_user'
  end

end
