Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :playlists, only: [:index, :show]

  #spotify authentication
  get '/auth/login', to: 'auth#spotify_request'
  get '/user', to: 'users#create'
end
