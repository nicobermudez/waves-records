class ApplicationController < ActionController::Base
  # before_action :authorized

  def encode_token(payload)
    JWT.encode(payload, "supersecret")
  end

  def decoded_token
    token = request.headers["Authorization"]
    if token
      token.split(' ')[1]
      begin
        JWT.decode(token, "supersecret", true, algorithm: 'HS256')
      rescue JWT::DecodeError
        [{}]
      end
    end
  end

  def logged_in?
    !!active_user
  end

  def active_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  # def authorized
  #   render json: {message: "Please log in"}, status: 401 unless logged_in?
  # end

end
