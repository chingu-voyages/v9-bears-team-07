class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.string "name"
      t.string "avatar"
      t.belongs_to :user, index: true
      t.timestamps
    end
  end
end
