class Booking < ApplicationRecord
  belongs_to :resource
  belongs_to :user
  belongs_to :account

end
