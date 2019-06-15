class User < ApplicationRecord
  has_many :dogs
  has_many :park_users
  has_many :parks, through: :park_users
  # has_secure_password :validations => false if google_user

end
