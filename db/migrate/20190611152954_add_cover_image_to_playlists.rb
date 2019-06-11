class AddCoverImageToPlaylists < ActiveRecord::Migration[5.2]
  def change
    add_column :playlists, :cover_image, :string
  end
end
