Rails.application.routes.draw do
  root 'playlist#index'
  resources :users, only: [:index, :show]
  resources :playlists, only: [:index, :show]
end
