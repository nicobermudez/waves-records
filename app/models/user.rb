class User < ApplicationRecord
  has_secure_password

  has_many :playlists
  has_many :songs, through: :playlists
end
