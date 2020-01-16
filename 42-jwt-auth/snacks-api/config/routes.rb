Rails.application.routes.draw do
  # resources :users_snacks
  resources :users, only: [:show, :create]
  resources :snacks, only: [:index]
  resources :login, only: [:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
