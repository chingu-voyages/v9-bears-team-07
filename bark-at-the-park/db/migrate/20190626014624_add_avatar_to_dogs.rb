class AddAvatarToDogs < ActiveRecord::Migration[5.2]
  def change
    add_column :dogs, :avatar, :string
    add_reference :dogs, :user, foreign_key: true
  end
end
