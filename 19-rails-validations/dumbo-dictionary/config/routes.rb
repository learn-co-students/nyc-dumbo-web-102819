Rails.application.routes.draw do
  resources :definitions, only: [:new, :create]
  # get "/definitions/new", to: "defintions#new"
  # post "/definitions", to: "defintions#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # custom routes for definitions
  patch "/definitions/:id/upvote", to: "definitions#upvote", as: "upvote_definition"
  patch "/definitions/:id/downvote", to: "definitions#downvote", as: "downvote_definition"

  # resources :words
  get "/words", to: "words#index", as: "words"
  get "/words/new", to: "words#new", as: "new_word"
  get "/words/:id", to: "words#show", as: "word"
  get "/words/:id/edit", to: "words#edit", as: "edit_word"
  patch "/words/:id", to: "words#update"
  post "/words", to: "words#create"
  delete "/words/:id", to: "words#destroy"

  

end
