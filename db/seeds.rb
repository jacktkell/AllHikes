# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# puts "Creating Users..."
# User.create(name: 'Jeff')

puts "Creating Hikes..."
Hike.create(name: 'Old Rag', length: 9.1, elevation_gain: 2348, x_coordinate: 38.57135, y_coordinate: -78.29359, image_url: "https://www.hikingupward.com/SNP/OldRag/images/MapSmall.gif")

# puts "Creating Trips..."
# Trip.create(user_id: 1, hike_id: 1)

# puts "Creating Comments..."
# Comment.create(user_id: 1, hike_id: 1, content: "Very cool")