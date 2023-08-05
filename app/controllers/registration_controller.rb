class RegistrationController < ApplicationController

  def index
  end

  def create
    @user = User.new(user_params) #Inuts the Params User hash directly, validates using user_params function
    if @user.save
      redirect_to root_path, notice: "Successfully made a new account"
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

end
