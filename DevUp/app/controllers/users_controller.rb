class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new user_params

    if @user.save
  end

  def show
    @user= User.find params[:id]
  end

  private

  def user_params
    params.require(:user).permit(
      :full_name,
      :username,
      :email,
      :password,
      :password_confirmation
    )
  end
end
