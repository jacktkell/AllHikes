class HikesController < ApplicationController
    def index 
        render json: Hikes.all 
    end
end
