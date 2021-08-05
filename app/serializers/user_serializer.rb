class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :user_hikes
  
  def user_hikes
    object.trips.map do |trip|
      trip.hike 
    end
  end

  has_many :trips
end
