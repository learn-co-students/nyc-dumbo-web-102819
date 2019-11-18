require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
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
    # get all the rats
    @rats = Rat.all

    # response?
    # html_string = "<ul>"
    # rats.each do |rat|
    #   html_string += "<li>#{rat.name}</li>"
    # end
    # html_string += "</ul>"

    # html_string
    # iterate throught them and show some attributes to the user
    erb :index
  end

end
