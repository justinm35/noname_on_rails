class Api::V1::RegistrationController < ApplicationController

  def index
  end

  def create
    account = add_new_account(user_params[:username])
    @user = account.users.new(user_params) #Inuts the Params User hash directly, validates using user_params function
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

  def add_new_account(username)
    return Account.create(company_name: "intro-account-#{username}")
  end
end
