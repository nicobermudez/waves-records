class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :spotify_url, :spotify_id

  has_many :playlists, serializer: UserPlaylistsSerializer
end
