class CreateVenues < ActiveRecord::Migration[5.2]
  def change
    create_table :venues do |t|
      t.string :name, null: false
      t.string :type, null: false
      t.float :price
      t.string :manager
      t.string :phone_num
      t.string :address
      t.string :city
      t.string :state
      t.string :country
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
