class CreateParkUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :park_users do |t|

      t.timestamps
    end
  end
end
