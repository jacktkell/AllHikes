class UsersController < ApplicationController
    

    # def create 
    #     user = User.create(user_params)
    #     session[:user_id] = user.id 
    #     rendr json: user, status: :created
    # end
    

    # def show
    #     user = User.find_by(id: params[:id])
    #     if user
    #       render json: user
    #     else
    #        render json: {error: "User not found"}
    #     end
    # end

    def show
        render json: @current_user 
    end


    def index
        render json: User.all 
    end


    private 
    
    def user_params
        params.require(:user).permit(:name, :password)
    end
end
