class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :href
  has_many :users
end
