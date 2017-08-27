class RoomUser < ApplicationRecord
  belongs_to :user
  belongs_to :room

  validate :validate_room_limit

  def validate_room_limit
    if self.room.users.count >=  self.room.limit
      errors.add(:users, "Room is full, already has #{self.room.limit} players")
    end
  end

end
