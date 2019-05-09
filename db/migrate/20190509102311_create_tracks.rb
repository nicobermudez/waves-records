class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :name
      t.string :artist
      t.string :album
      t.integer :duration
      t.string :genre
      t.string :uri

      t.timestamps
    end
  end
end
