class ToysController < ApplicationController

  def index
    @toys = Toy.order(likes: :desc)
    # @toys = Toy.all
    # Toy.all doesn't have a default order
    render json: @toys
  end

  def create
    @toy = Toy.create(toy_params)
    if @toy.valid?
      render json: @toy, status: 201
    else
      render json: {errors: @toy.errors.full_messages}, status: 418
    end
  end

  def update
    @toy = Toy.find(params[:id])
    if @toy.update(toy_params)
      render json: @toy
    else
      render json: {errors: "Invalid update"}
    end
  end

  def destroy
    @toy = Toy.find(params[:id])
    @toy.destroy
    render json: @toy

  end


  private

  def toy_params
    params.permit(:name, :image, :likes)
  end

end
