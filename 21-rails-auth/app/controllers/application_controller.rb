class ApplicationController < ActionController::Base
  before_action :authorized
  helper_method :current_user, :logged_in?
  # are we logged in?
  # are we allowed 2 c this page?
  # whomst is the user stored in our session at the moment

  def current_user
    # find_by will give me nil
    # nil is falsey
    # User.find will error out if ther is no user
    User.find_by(id: session[:user_id])
  end

  def login_user(user)
    session[:user_id] = user.id
  end

  def logged_in?
    # coerce current_user into a boolean
    # !!nil => false
    !!current_user
  end

  def authorized
    unless logged_in?
    # if !logged_in
      flash[:notice] = "You must be logged in to see this page"
      redirect_to login_path
    end
  end
end
