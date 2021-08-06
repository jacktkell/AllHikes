puts "Destroying data..."
Hike.destroy_all
Trip.destroy_all
User.destroy_all
Comment.destroy_all

puts "Creating Users..."
User.create(name: 'andrey', password: '123')
User.create(name: 'jack', password: '123')
User.create(name: 'jeff', password: '123')
User.create(name: 'emily', password: '123')
User.create(name: 'paul', password: '123')

puts "Creating Hikes..."
Hike.create(name: 'Old Rag', length: 9.1, elevation_gain: 2348, x_coordinate: 38.57135, y_coordinate: -78.29359, image_url: "https://www.hikingupward.com/SNP/OldRag/images/MapSmall.gif", description: "Smells like an old rag")
Hike.create(name: 'Craggy Pinnacle', length: 1.1, elevation_gain: 230, x_coordinate: 35.70419, y_coordinate: -82.37355, image_url: "https://www.hikingupward.com/NCSP/CraggyPinnacle/images/MapSmall.gif", description: "So craggy!")
Hike.create(name: 'Three Top Mountain', length: 4.7, elevation_gain: 1492, x_coordinate: 36.42188, y_coordinate: -81.59793, image_url: "https://www.hikingupward.com/NCSP/ThreeTopMountain/images/MapSmall.gif", description: "There's three of them")
Hike.create(name: 'Chimney Top', length: 5.4, elevation_gain: 1960, x_coordinate: 38.98159, y_coordinate: -79.23113, image_url: "https://www.hikingupward.com/MNF/ChimneyTop/images/MapSmall.gif", description: "Smokey and inviting")
Hike.create(name: "Strickler Knob", length: 5.8, elevation_gain: 1050, x_coordinate: 38.69143, y_coordinate: -78.58004, image_url: "https://www.hikingupward.com/GWNF/StricklerKnob/images/MapSmall.gif", description: "A very fun hike")
Hike.create(name: "North Mountain", length: 6.8, elevation_gain: 1154, x_coordinate: 37.81906, y_coordinate: -79.63468, image_url: "https://www.hikingupward.com/GWNF/NorthMountainPetesCave/images/MapSmall.gif", description: "West mountain is better")
Hike.create(name: "Sky Meadows", length: 7.1, elevation_gain: 1292, x_coordinate: 38.99144, y_coordinate: -77.96591, image_url: "https://www.hikingupward.com/OVH/SkyMeadows/images/MapSmall.jpg", description: "It's like a meadow in the sky")
Hike.create(name: 'Max Patch Mountain', length:7.1, elevation_gain: 2061, x_coordinate: 35.77318, y_coordinate: -82.9957, image_url: "https://www.hikingupward.com/PNF/MaxPatch/images/MapSmall.gif", description:"Patches to the max")
Hike.create(name: 'Pond Mountain and Stone Mountain', length:10.7, elevation_gain:2045, x_coordinate:36.55554, y_coordinate:-81.67758, image_url:"https://www.hikingupward.com/NCSP/PondMountainStoneMountain/images/MapSmall.gif")
Hike.create(name: 'Blackrock Mountain', length:4.8, elevation_gain:1565, x_coordinate:35.45641, y_coordinate:-83.14319, image_url:"https://www.hikingupward.com/NCSP/BlackrockMountainThePinnacle/images/MapSmall.gif")
Hike.create(name:'Grandfather Mountain', length:11.3, elevation_gain:4035, x_coordinate:36.1198, y_coordinate:-81.8350, image_url:"https://www.hikingupward.com/NCSP/GrandfatherMountainProfileTrail/images/MapSmall.gif")
Hike.create(name:'Grandfather Mountain/Daniel Boone', length:11.5, elevation_gain:3378, x_coordinate:36.11986, y_coordinate: -81.78131, image_url:"https://www.hikingupward.com/NCSP/GrandfatherMountainDanielBoone/images/MapSmall.jpg")
Hike.create(name:'Old Butt Knob Trail and Shining Creek Trail Loop', length:11.9, elevation_gain:3410, x_coordinate:35.36583, y_coordinate: -82.81786, image_url:"https://www.hikingupward.com/PNF/OldButtKnobShiningCreek/images/MapSmall.gif")
Hike.create(name:'Devils Courthouse, Black Balsam Knob and Sam Knob', length:12.1, elevation_gain:2205, x_coordinate:35.30374, y_coordinate:-82.90872, image_url:"https://www.hikingupward.com/PNF/DevilsCourthouseBlackBalsamKnobSamKnob/images/MapSmall.gif")
Hike.create(name:'Black Mountain Crest Trail - Pisgah National Forest', length:12.1, elevation_gain:5390, x_coordinate:35.87581, y_coordinate:-82.28351, image_url:"https://www.hikingupward.com/PNF/BlackMountainCrestTrail/images/MapSmall.gif")
Hike.create(name:'Mount LeConte via Alum Cave Trail', length:12.4, elevation_gain:1160, x_coordinate:35.62848, y_coordinate:-83.45053, image_url:"https://www.hikingupward.com/GSMNP/MtLeConte/images/MapSmall.gif")
Hike.create(name:'Wesser Bald', length:13.3, elevation_gain:4000, x_coordinate:35.33217, y_coordinate:-83.59204, image_url:"https://www.hikingupward.com/NNF/WesserBald/images/MapSmall.gif")
Hike.create(name:'Wilburn Ridge/Pine Mountain', length:14.2, elevation_gain:2225, x_coordinate:36.63330, y_coordinate:-81.50909, image_url:"https://www.hikingupward.com/JNF/WilburnRidgePineMountain/images/MapSmall.jpg")
Hike.create(name:'Spruce Knob/Seneca Creek', length:16.5, elevation_gain:2310, x_coordinate:38.70230, y_coordinate:-79.53105, image_url:"https://www.hikingupward.com/MNF/SpruceKnobSenecaCreek/images/MapSmall.jpg")

puts "Creating Trips..."
Trip.create(user_id: 1, hike_id: 1)
Trip.create(user_id: 1, hike_id: 2)
Trip.create(user_id: 1, hike_id: 5)
Trip.create(user_id: 2, hike_id: 1)
Trip.create(user_id: 1, hike_id: 3)
Trip.create(user_id: 3, hike_id: 6)
Trip.create(user_id: 3, hike_id: 4)
Trip.create(user_id: 5, hike_id: 1)

puts "Creating Comments..."
Comment.create(user_id: 1, hike_id: 1, content: "Very cool")
Comment.create(user_id: 2, hike_id: 1, content: "A great day in the outdoors")
Comment.create(user_id: 5, hike_id: 1, content: "I'd come back for the scenery")
Comment.create(user_id: 1, hike_id: 2, content: "Very cool")
Comment.create(user_id: 1, hike_id: 5, content: "Very cool")
Comment.create(user_id: 1, hike_id: 3, content: "Awesome")
Comment.create(user_id: 3, hike_id: 4, content: "10/10")
Comment.create(user_id: 3, hike_id: 6, content: "Amazing!")
Comment.create(user_id: 3, hike_id: 2, content: "Spectacular")
Comment.create(user_id: 4, hike_id: 3, content: "I lost my glasses")
Comment.create(user_id: 2, hike_id: 4, content: "Not enough birds")
Comment.create(user_id: 5, hike_id: 5, content: "Too steep")
Comment.create(user_id: 1, hike_id: 6, content: "Very clean")