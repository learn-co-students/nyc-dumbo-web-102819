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
    # "<marquee>#{"🍞" * 99}</marquee>"
    erb :french_toast
  end

  #TODO: show a list of all the rats in our application
  get '/rats' do
    # model?
    @rats = Rat.all
    erb :index
  end

  get '/rats/new' do
    
    erb :new
  end

  get '/rats/:id' do
    # model
    @rat = Rat.find(params[:id])
    @rat_emoji = "🐀"

    # response
    erb :show
  end

  post '/rats' do
    # model
    @rat = Rat.create(params[:rats])

    # response?
    # erb :show
    redirect "/rats/#{@rat.id}"
  end

  get '/rats/:id/edit' do
    @rat = Rat.find(params[:id])

    erb :edit
  end

  patch '/rats/:id' do
    rat = Rat.find(params[:id])
    rat.update(params[:rat])

    # response?
    redirect "/rats/#{rat.id}"
  end

  # get '/rats/1' do
  #   # model
  #   @rat = Rat.find(1)

  #   # response
  #   erb :show
  # end

  # get '/rats/2' do
  #   # model
  #   @rat = Rat.find(2)
    
  #   # response
  #   erb :show
  # end

  # get '/rats/3' do
  #   # model
  #   @rat = Rat.find(3)
    
  #   # response
  #   erb :show
  # end

end
