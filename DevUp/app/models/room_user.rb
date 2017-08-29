class RoomUser < ApplicationRecord
  belongs_to :user
  belongs_to :room

  validate :validate_room_limit

  def validate_room_limit
    if self.room.users.count >=  self.room.limit
      errors.add(:users, "Room is full, already has #{self.room.limit} players")
    end
  end

  validates :room_id, uniqueness:  {
    scope: :user_id,
    message: ->(object, data) do
      "You've already joined this #{data[:attribute].downcase}"
    end
  }

end
