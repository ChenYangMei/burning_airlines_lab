class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :flight_id

      t.integer :column
      t.integer :row
      
      t.timestamps null: false
    end
  end
end
