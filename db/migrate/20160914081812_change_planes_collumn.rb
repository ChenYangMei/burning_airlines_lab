class ChangePlanesCollumn < ActiveRecord::Migration
  def change
    remove_column :planes, :row
    add_column :planes, :row, :integer
  end
end
