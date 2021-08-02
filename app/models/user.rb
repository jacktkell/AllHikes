class User < ApplicationRecord
    has_many :trips 
    has_many :hikes, through: :trips 
    has_many :comments  
end
