class Hike < ApplicationRecord
    has_many :trips 
    has_many :users, through: :trips  
    has_many :comments

    # def hike_comments
    #     self.comments.map do |trip|
    #       trip.comments 
    #     end
    # end
end
