class LoginController < ApplicationController
    def create
        user = User.find_by(name:params[:user][:name])
        if user && user.authenticate(params[:user][:password])
            render json: {id: user.id, name: user.name, }
        else 
            render json: {message: ['incorrect user or password']}
        end 
    end 
end
