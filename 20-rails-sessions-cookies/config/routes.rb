Rails.application.routes.draw do
  resources :nachos, only: [:index, :show]
  # resources :cart, only: [:update] # supposed to be a cart id, we don't want to break REST
  patch '/cart', to: "cart#update"
end
