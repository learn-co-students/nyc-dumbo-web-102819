class RatsController < ApplicationController
  get '/rats' do
    @rats = Rat.all
    erb :"rats/index"
  end

  get '/rats/new' do
    erb :"rats/new"
  end

  post '/rats' do
    rat = Rat.create(params[:rat])
    redirect "/rats"
  end

end