# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

nico = User.create({name: "Nico", spotify_id: "", spotify_url: ""})

deep_house_playlist = Playlist.create({name: "Deep House Hits", followers: 500 })
nostalgic_playlist = Playlist.create({name: "Nostalgic", followers: 300 })
happy_playlist = Playlist.create({name: "Happy in the Sun", followers: 400 })
gym_playlist = Playlist.create({name: "Time to Grind", followers: 1500 })


nico.playlists << deep_house_playlist
