class CreateFlightsUsers < ActiveRecord::Migration
  def change
    create_table :flights_users do |t|
      t.integer :flight_id
      t.integer :user_id
      # Reservation Table
    end
  end
end
