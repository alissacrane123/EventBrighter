class ChangeUsersAndVenues < ActiveRecord::Migration[5.2]
  def change
    remove_column :venues, :email, :string
    remove_column :venues, :password, :string
    remove_column :venues, :price, :float

    remove_column :events, :venue, :string
    add_column :events, :price, :float

    add_column :venues, :owner_id, :integer
  end
end
