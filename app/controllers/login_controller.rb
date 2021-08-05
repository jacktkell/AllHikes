class LoginController < ApplicationController
    def create

        user = User.find_by(name:params[:name])
           if user && user.authenticate(params[:password])
            
            render json: {id: user.id, name: user.name, user_hikes: user.user_hikes}

        else 
            render json: {message: ['incorrect user or password']}
        end 
    end 
end
