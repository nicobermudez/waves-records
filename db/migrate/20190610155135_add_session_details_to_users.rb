class AddSessionDetailsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :expires_in, :integer
    add_column :users, :login_time, :datetime
  end
end
