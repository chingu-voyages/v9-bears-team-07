class AddLocationToParks < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :location, :decimal, array: true, default: []
  end
end
