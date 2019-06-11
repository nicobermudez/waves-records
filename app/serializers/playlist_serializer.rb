class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :href, :cover_image
end
