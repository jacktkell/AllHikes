class HikesController < ApplicationController
    def index 
        render json: Hike.all 
    end

    def show
        hike = Hike.find_by(id: params[:id])
       
        if hike
          render json: hike
        else
           render json: {error: "hike not found"}
        end
    end
end
