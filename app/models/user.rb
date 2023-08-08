class User < ApplicationRecord

  has_secure_password

  before_save {self.email = email.downcase}
  # Presence validation stacks ontop of the Models null = false
  # Ensures format using the URI::MailTo RegEx helper
  validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}, presence: true, uniqueness: true

end
