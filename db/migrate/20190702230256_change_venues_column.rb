class ChangeVenuesColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :venues, :manager, :string
    add_column :venues, :email, :string 
    add_column :venues, :password, :string
  end
end
