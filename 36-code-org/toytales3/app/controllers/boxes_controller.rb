class BoxesController < ApplicationController

  def index
    @boxes = Box.all
    render json: @boxes, include: {toys: {only: [:id, :name, :image, :likes]}}
  end

end
