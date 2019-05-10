class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password
      t.string :spotify_url
      t.string :spotify_id
      t.string :access_token
      t.string :refresh_token

      t.timestamps
    end
  end
end
