class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string "first_name"
      t.string "last_name"
      t.string "email"
      t.string "password_digest"
      t.boolean "logged_in", default: false
      t.boolean "google_user", default: false
      t.string "avatar"
      t.timestamps
    end
  end
end
