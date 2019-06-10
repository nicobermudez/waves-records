class ApplicationController < ActionController::Base

  def logged_in?
    !!active_user
  end

  def active_user
    @active_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def token_expired?
    token_session = active_user.login_time + 3600
    current_time = Time.now
    current_time >= token_session ? true : false
  end

end
