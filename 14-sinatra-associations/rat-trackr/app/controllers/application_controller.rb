require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end


  get "/" do
    erb(:welcome)
  end

  get "/french_toast" do
    erb :french_toast
  end

  # index
  get '/rats' do
    # model
    @rats = Rat.all

    # response
    erb :index
  end

  # new
  get '/rats/new' do
    erb :new
  end

  # show
  get '/rats/:id' do
    # model
    @rat = Rat.find(params[:id])

    # response
    erb :show
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
    erb :edit
  end

  # update
  patch '/rats/:id' do
    # model
    rat = Rat.find(params[:id])
    rat.update(params[:rat])

    # response
    redirect "/rats/#{rat.id}"
  end

end
