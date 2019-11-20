class RatsController < ApplicationController

  # index
  get '/rats' do
    # model
    @rats = Rat.all

    # response
    erb :"rats/index"
  end

  # new
  get '/rats/new' do
    erb :"rats/new"
  end

  # show
  get '/rats/:id' do
    # model
    @rat = Rat.find(params[:id])

    # response
    erb :"rats/show"
  end

  # create
  post '/rats' do
    # model
    @rat = Rat.create(params[:rat])

    # response
    redirect "/rats/#{@rat.id}"
  end

  # edit
  get '/rats/:id/edit' do
    # model
    @rat = Rat.find(params[:id])

    # response
    erb :"rats/edit"
  end

  # update
  patch '/rats/:id' do
    # model
    rat = Rat.find(params[:id])
    rat.update(params[:rat])

    # response
    redirect "/rats/#{rat.id}"
  end

  # destroy
  delete '/rats/:id' do
    # model
    rat = Rat.find(params[:id])
    rat.destroy

    # response
    redirect "/rats"
  end
end