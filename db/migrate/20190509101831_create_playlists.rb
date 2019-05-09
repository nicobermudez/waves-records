class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :name
      t.string :mood
      t.string :description
      t.string :spotify_id
      t.string :href
      t.integer :followers
      t.boolean :is_favorite

      t.timestamps
    end
  end
end
