# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

nico = User.create({name: "Nico", spotify_id: "", spotify_url: ""})

deep_house_playlist = Playlist.create({name: "Deep House Hits", image: File.open(Rails.root + 'app/assets/images/deep_house.jpg')})

nostalgic_playlist = Playlist.create({name: "Nostalgic"})
happy_playlist = Playlist.create({name: "Happy in the Sun"})
gym_playlist = Playlist.create({name: "Time to Grind"})


nico.playlists << deep_house_playlist
