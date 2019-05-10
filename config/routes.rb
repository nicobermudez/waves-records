Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :playlists, only: [:index, :show]
end
