class Playlist < ApplicationRecord
  has_and_belongs_to_many :users
  has_many :songs
  has_one_attached :image

end
