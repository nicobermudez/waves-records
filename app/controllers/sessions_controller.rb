class SessionsController < ApplicationController

  def create
    @user = User.find(email: params[:email])
  end

  def delete

  end
end
