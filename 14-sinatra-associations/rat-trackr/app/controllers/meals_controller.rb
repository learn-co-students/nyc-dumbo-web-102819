class MealsController < ApplicationController

  get '/meals/new' do
    @rats = Rat.all.order(:name)
    # response
    erb :"meals/new"
  end

  post '/meals' do
    binding.pry
    # model
    meal = Meal.create(params[:meal])

    # response
    redirect "/rats/#{meal.rat_id}"
  end

end