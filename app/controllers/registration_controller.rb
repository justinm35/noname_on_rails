class RegistrationController < ApplicationController

  def index
  end

  def create
    @user = User.new(user_params) #Inuts the Params User hash directly, validates using user_params function
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:full_name, :email,:username, :password, :password_confirmation)
  end

end
