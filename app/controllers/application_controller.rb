class ApplicationController < ActionController::Base
  
  def logged_in?
    !!active_user
  end

  def active_user
    @active_user ||= User.find(session[:user_id]) if session[:user_id]
  end

end
