class User < ApplicationRecord
  has_many :dogs
  has_many :park_users
  has_many :parks, through: :park_users
  accepts_nested_attributes_for :dogs
  has_secure_password :validations => false
  validates_presence_of :password_digest, :unless => :google_user

end
