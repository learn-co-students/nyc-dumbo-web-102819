class CartController < ApplicationController
  def update
    # byebug


    # is the cart empty
    # cart ||= []
    add_nacho_to_cart(params[:nacho_id])

    redirect_to nachos_path


  end
end
