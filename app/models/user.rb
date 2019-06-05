class User < ApplicationRecord
  has_and_belongs_to_many :playlists

  # def access_token_expired?
  #
  # end
end
