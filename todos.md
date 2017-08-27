rails g model roomUsers user:references room:references
add index









class Room
  has_many :users, before_add: :validate_room_limit

  def validate_room_limit
    if self.users.count >  self.limit
    errors.add(:users, "Room is full, already has #{self.users.count} players")
    end
  end
end
