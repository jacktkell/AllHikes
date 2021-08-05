class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create

    def create
        user = User.create(user_params)
        if user.valid?
             render json: {id:user.id, name: user.name}
        else 
             render json: {message: user.errors.full_messages}
        end 
     end 
    

    def show
        render json: @current_user 
    end


    def index
        render json: User.all 
    end


    private 
    
    def user_params
        params.permit(:name, :password)
    end
end
