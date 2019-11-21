class RatsController < ApplicationController

  # get '/rats' do
  #   # model
  #   @rats = Rat.all

  #   # response
  #   erb :"rats/index"
  # end

  # get /rats
  def index
    # model
    @rats = Rat.all

    # response
    # render :index
  end

  # show
  # get '/rats/:id' do
  #   # model
  #   @rat = Rat.find(params[:id])

  #   # response
  #   erb :"rats/show"
  # end

  # get /rats/:id
  def show
    # model
    @rat = Rat.find(params[:id])

    # response
    render :show
  end

end
