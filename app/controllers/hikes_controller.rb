class HikesController < ApplicationController
    def index 
        render json: Hike.all 
    end
end
