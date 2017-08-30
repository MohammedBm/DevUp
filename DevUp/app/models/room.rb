class Room < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_many :room_users, dependent: :destroy
  has_many :users, through: :room_users, source: :user

  belongs_to :user


  validates(:title, presence: true,
                    uniqueness: true)
  validates(:game, presence: true, length: { minimum: 5, maximum: 20 })
  validates(:activity, presence: true)
  validates(:limit, presence: true)
  validates(:creater, presence: true, length: { minimum: 3, maximum: 20 })


end
