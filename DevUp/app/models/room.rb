class Room < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_many :room_users, dependent: :destroy
  has_many :users, through: :room_users, source: :user

  belongs_to :user

  # before_save :validate_room_limit

  validates(:title, presence: true,
                    uniqueness: true)
  validates(:game, presence: true, length: { minimum: 5, maximum: 20 })

  validates(:creater, presence: true, length: { minimum: 3, maximum: 20 })
end
