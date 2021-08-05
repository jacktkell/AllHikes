class TripsController < ApplicationController
    def create 
        trip = Trip.create(hike_id: params[:hike_id], user_id: params[:user_id])
        #trip = Trip.create(hike_id: params[:hike_id], user_id: session[:user_id])
        render json: trip
    end

    def index 
        render json: Trip.all 
    end
end
