class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :venue, null: false 
      t.integer :venue_id, null: false 
      t.string :title, null: false 
      t.string :city, null: false
      t.string :state, null: false
      t.string :type, null: false
      t.text :description
      t.date :date
      t.string :start_time
      t.string :end_time

      t.timestamps
    end
    add_index :events, :title 

  end
end
