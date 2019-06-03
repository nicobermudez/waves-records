# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

nico = User.create({name: "Nico", spotify_id: "", spotify_url: ""})

deep_house_playlist = Playlist.create({name: "Deep House Hits", href: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjB8_rShc7iAhVwxFkKHba1A-EQjRx6BAgBEAU&url=https%3A%2F%2Fopen.spotify.com%2Fuser%2Fspotify%2Fplaylist%2F37i9dQZF1DX2TRYkJECvfC&psig=AOvVaw2PK8xI4gn15xi4pLa85PSk&ust=1559676435197441'})

nostalgic_playlist = Playlist.create({name: "Nostalgic"})
happy_playlist = Playlist.create({name: "Happy in the Sun"})
gym_playlist = Playlist.create({name: "Time to Grind"})


nico.playlists.push(deep_house_playlist)
