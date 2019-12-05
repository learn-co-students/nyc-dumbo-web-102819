class UsersController < ApplicationController
  before_action :find_user, only: [:show, :destroy]
  # skip_before_action :authorized, only: [:new, :create]

  def show
    render :show
  end

  def new
    @user = User.new
    render :new
  end

  def create #POST request to /users FOR SIGNUP
    # byebug
    @user = User.create(user_params) # User.create is a method on our MODEL which will encrypt and store the user's plaintext password
    #
    redirect_to @user
  end

  def destroy
    @user.destroy
    redirect_to new_user_path
  end

  private

  def find_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
