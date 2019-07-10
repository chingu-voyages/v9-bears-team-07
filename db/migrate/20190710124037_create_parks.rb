class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string "name"
      t.string "address"
      t.time "opening_time"
      t.time "closing_time"
      t.decimal "location", default: [], array: true
      t.timestamps
    end
  end
end
