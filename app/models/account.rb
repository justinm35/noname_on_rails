class Account < ApplicationRecord
  has_many :bookings, through: :resources
  has_many :users
end
