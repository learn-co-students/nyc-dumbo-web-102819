Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/randy", to: "not_cool#pizza"

  get "/rats", to: "rats#index", as: "rats"
  get "/rats/:id", to: "rats#show", as: "rat"
end
