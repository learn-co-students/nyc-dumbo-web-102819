  class UsersController < ApplicationController

  def show
    user_id = params[:id]
    user = User.find(user_id)
    render json: user, include: :snacks
  end
  
  def create
    user = User.create(user_params)
    if user.valid?
      render json: { logged_in: "👍" } 
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end   
  end

  private

  def user_params
    params.permit(:username, :password)
  end

end
