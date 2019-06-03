Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :playlists
  end

  #spotify authentication
  get '/auth/login', to: 'auth#spotify_request'
  get '/user', to: 'users#create'
end
