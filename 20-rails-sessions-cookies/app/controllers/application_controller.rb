class ApplicationController < ActionController::Base


  def cart # returns the cart array stored in session
    session[:cart] ||= []
  end

  def add_nacho_to_cart(the_nacho_id)
    cart << the_nacho_id
  end

  def get_items_from_cart # take the nacho_ids in the cart and return ruby
    @cart_items = Nacho.find(cart)
  end

end
