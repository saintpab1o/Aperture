class Api::UsersController < ApplicationController
    def create
      @user = Api::User.new(user_params)
      if @user.save
        login!(@user)
        render :login
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def show
        @user = User.find(params[:id])
        render :show
      end

    private
  
    def user_params
      params.require(:user).permit(:username, :email :password)
    end
end