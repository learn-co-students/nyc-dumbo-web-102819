  class UsersController < ApplicationController

  def show
    user_id = params[:id]
    if logged_in_user_id == user_id.to_i
      user = User.find(user_id)
      render json: user, include: :snacks
    else
      render json: { go_away: true }, status: :unauthorized
    end
  end
  
  def create
    user = User.create(user_params)
    if user.valid?
      render json: { token: create_token(user.id), user_id: user.id } 
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end   
  end

  private

  def user_params
    params.permit(:username, :password)
  end

end
