class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :spotify_url, :spotify_id, :image
  has_many :playlists, serializer: UserPlaylistsSerializer
end
