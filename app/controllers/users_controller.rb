class UsersController < ApplicationController
    def create
        user = User.create(user_params)
        if user.valid?
            render json: {id: user.id, name: user.name}
        else 
            render json: {message: user.errors.full_messages}
        end
    end
    
    private 
    
    def user_params
        params.require(:user).permit(:name, :password)
    end
end
