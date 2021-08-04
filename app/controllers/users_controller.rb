class UsersController < ApplicationController
    def create
        user = User.create(user_params)
        if user.valid?
            render json: {id: user.id, name: user.name}
        else 
            render json: {message: user.errors.full_messages}
        end
    end
    

    def show
        user = User.find_by(id: params[:id])
       
        if user
          render json: user
        else
           render json: {error: "User not found"}
        end
    end


    def index
        render json: User.all 
    end


    private 
    
    def user_params
        params.require(:user).permit(:name, :password)
    end
end
