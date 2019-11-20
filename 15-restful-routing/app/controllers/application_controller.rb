require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  get "/" do
    erb :welcome
  end

  get "/sushis" do
    @sushis = Sushi.all 
    erb:"sushis/index" 
  end 

  get "/sushis/new" do 
    @sushi = Sushi.new
    erb:"sushis/new"
  end 

  get "/sushis/:id/edit" do 
    @sushi = Sushi.find(params[:id])
    erb:"sushis/edit"
  end 

  get "/sushis/:id" do 
    @sushi = Sushi.find(params[:id])
    erb:"sushis/show"
  end 

  

  post "/sushis" do 
    @sushi = Sushi.create(params[:sushi])
    redirect "sushis/#{@sushi.id}"
  end 

  patch "/sushis/:id" do
    @sushi = Sushi.find(params[:id])
    @sushi.update(params[:sushi])
    redirect "sushis/#{@sushi.id}"
  end 

  delete "/sushis/:id" do 
    @sushi = Sushi.find(params[:id])
    @sushi.destroy
    redirect "/sushis"
  end 

  

 

  

end
