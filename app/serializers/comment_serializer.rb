class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :hike_id, :user_id
  # has_many :users, through: :user_id
  #belongs_to :user
end
