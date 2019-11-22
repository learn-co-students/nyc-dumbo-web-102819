Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/words", to: "words#index", as: "words"
  get "/words/new", to: "words#new", as: "new_word"
  get "/words/:id", to: "words#show", as: "word"
  get "/words/:id/edit", to: "words#edit", as: "edit_word"
  patch "/words/:id", to: "words#update"
  post "/words", to: "words#create"
end
