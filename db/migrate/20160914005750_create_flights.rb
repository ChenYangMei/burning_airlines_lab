class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :name
      t.integer :booked_seats
      t.string :origin
      t.string :destination
      t.date :date

      # Foreign Key
      t.integer :plane_id

      t.timestamps null: false
    end
  end
end
