# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Room.destroy_all
User.destroy_all
Comment.destroy_all
Tag.destroy_all
tags = Tag.all

tag_path = Rails.root.join('db/tag_data.json')
raw_tag_data = File.open(tag_path)
tag_json =  File.read(raw_tag_data)
parsed_tags = JSON.parse(tag_json)


PASSWORD = '1q2w'
User.create full_name: 'Jon Snow', username: 'KingInTheNorth', email: 'mb@w.cn', password: PASSWORD

i ||= 0;
while i < 150 do
 u = User.create(
    full_name: Faker::Name.name,
    username: Faker::LeagueOfLegends.champion,
    email:Faker::Internet.safe_email,
    password: PASSWORD
  )
  i = i + 1;
 end

 parsed_tags.each do |key, value|
   Tag.create(name: value['name'])
 end
tags = Tag.all

 150.times do
   r = Room.create(
   title: "#{Faker::Lorem.sentence} join us we playing #{Tag.all.sample.name}",
   creater: Faker::Superhero.name,
   activity: Faker::Lorem.sentence,
   game: Tag.all.sample.name,
   time: Faker::Time.forward(23),
   user_id: User.all.sample.id,
   limit: rand(1..6)
   )

   r.limit.times do
     r.users << User.all.sample
   end
 end

rooms = Room.all

  rooms.each do
    rand(1..6).times do
      Comment.create(
        body: "add me my username is #{Faker::Team.name}",
        room_id: Room.all.sample.id,
        user_id: User.all.sample.id
      )
    end
  end

 puts Cowsay.say("Created #{User.count} Users", :tux)
 puts Cowsay.say("Created #{Room.count} Rooms", :cheese)
 puts Cowsay.say("Created #{Comment.count} Comments", :stimpy)
 puts Cowsay.say("Created #{Tag.count} Tags", :beavis)
