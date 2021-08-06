class TripSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :hike_id

  belongs_to :hike
end
