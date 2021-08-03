class User < ApplicationRecord
    has_many :trips 
    has_many :hikes, through: :trips 
    has_many :comments  
    
    validates :name, :password, presence: {message: "must be present"}
end
