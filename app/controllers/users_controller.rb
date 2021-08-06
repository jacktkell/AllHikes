class UsersController < ApplicationController
    #skip_before_action :authorize, only: :create

    # params.first, params.second
    def create
        user = User.create(name: params[:user][:name], password: params[:user][:password])
        if user.valid?
             render json: {name: user.name,id:user.id}
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
        byebug
    end
end
