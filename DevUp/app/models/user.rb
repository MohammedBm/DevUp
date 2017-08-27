class User < ApplicationRecord
  has_many :rooms, dependent: :nullify
  has_many :comments, dependent: :nullify
  has_secure_password

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX
  validates :full_name, :username, presence: true

# TODO: generate api key later on
  before_create :generate_api_key

  def generate_api_key
    loop do
      self.api_key = SecureRandom.hex(32)
      break unless User.exists?(api_key: api_key)
    end
  end
end
