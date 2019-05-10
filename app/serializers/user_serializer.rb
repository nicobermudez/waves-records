class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :spotify_url

  has_many :playlists, serializer: UserPlaylistsSerializer
end
