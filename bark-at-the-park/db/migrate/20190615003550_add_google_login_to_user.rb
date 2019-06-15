class AddGoogleLoginToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :google_user, :boolean, default: false
  end
end
