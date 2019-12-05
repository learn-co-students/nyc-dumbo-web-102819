class SessionsController < ApplicationController
  # the authorized before_action comes from ApplicationController
  # SessionsController inherits from ApplicationController
  # therefore, authorized is called BEFORE ANYTHING IN ANY CONTROLLER RUNS
  skip_before_action :authorized, only: [:new, :create]
  def new #GET request /login
    # render a form for the user to login
    render :new
  end

  def create #POST request '/login'
    # handle the submission form our login form
    # log the user in

    # see if we have a user with the provided username
    @user = User.find_by(username: params[:username])
    # if we find the user, make sure the password provided is correct
    # ruby will lazily evaluate this statement
    if @user && @user.authenticate(params[:password])
      # create a session (log the user in via sessions/cookies)
      # session[:user_id] = @user.id
      login_user(@user) #same as manually setting session; comes from ApplicationController
      flash[:notice] = "Login Successful! Welcome #{@user.username}"
      redirect_to @user
    else
      flash[:notice] = 'Invalid username or password!'
      redirect_to login_path
    end
  end

  def destroy
    session.delete(:user_id)
    # session[:user_id] = nil
    flash[:notice] = 'Logout Successful'
    redirect_to login_path
  end
end
