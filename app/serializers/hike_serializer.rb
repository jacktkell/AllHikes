class HikeSerializer < ActiveModel::Serializer
  attributes :id, :length, :name, :x_coordinate, :y_coordinate, :elevation_gain, :image_url, :description

  has_many :comments



  # def user_comments
  #   object.comments.map do |comment|
  #     comment.user
  #   end
  # end

end
