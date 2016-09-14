class DropFlightsUsers < ActiveRecord::Migration
  def change
    drop_table :flights_users
  end
end
