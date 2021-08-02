class Hike < ApplicationRecord
    has_many :trips 
    has_many :users, through: :trips  
    has_many :comments
end
