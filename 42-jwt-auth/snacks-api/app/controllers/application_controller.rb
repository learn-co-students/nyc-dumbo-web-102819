class ApplicationController < ActionController::API


  private

  def create_token(user_id)
    JWT.encode({ user_id: user_id }, hmac_secret, "HS256")
  end

  def hmac_secret
    ENV["TOKEN_SECRET"]
  end

  def logged_in_user_id
    begin
      token = request.headers["Authorization"]
      dumb_array = JWT.decode(token, hmac_secret, true, { algorithm: 'HS256' })
      user_id = dumb_array.first["user_id"]
      user_id
    rescue 
      nil
    end
  end

  def valid_token_exists
    !!logged_in_user_id  
  end

end