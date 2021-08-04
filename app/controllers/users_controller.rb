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
        user = User.find(params[:id])
        if user
          user.hikes.to_json()
        else
          {error: "User not found"}.to_json
        end
    end




    private 
    
    def user_params
        params.require(:user).permit(:name, :password)
    end
end
