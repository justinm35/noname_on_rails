class Api::V1::SessionsController < ApplicationController

  def create
    puts 'Create was hit!'
    @user = User.find_by(email: params[:user][:email].downcase)
    if @user
      if @user.authenticate(params[:user][:password])
        login @user
        render json: { status: 'success', user: @user.as_json(only: [:id, :email]) }, status: :ok
        puts 'User successfully logged in!'
      else
        render json: { status: 'error', message: 'Incorrect email or password' }, status: :unauthorized
      end
    else
      render json: { status: 'error', message: 'Email does not exist' }, status: :unauthorized
    end
  end

  def destroy

  end

  def authenticate
    puts 'Authenticatino endpoint hit'
    if user_signed_in?
      render json: { status: 'success', user: Current.user }, status: :ok
    else
      render json: { status: 'error', message: 'Session invalid' }, status: :unauthorized
    end
  end
end
