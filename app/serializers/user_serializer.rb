class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :spotify_url, :spotify_id, :image, :access_token, :refresh_token
  has_many :playlists, serializer: UserPlaylistsSerializer
end
