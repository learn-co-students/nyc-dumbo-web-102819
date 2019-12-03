class NachosController < ApplicationController
  before_action :find_nacho, only: :show
  # to aid in the reuse of that shared method

  def index
    # byebug
    get_items_from_cart
    @nachos = Nacho.all
  end

  def show
    @nacho = Nacho.find(params[:id])
    # render :show
  end

  private

  def find_nacho
  end
end
