class CreateParkUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :park_users do |t|
      t.belongs_to :user, index: true
      t.belongs_to :park, index: true
      t.timestamps
    end
  end
end
