class AddRoomToComment < ActiveRecord::Migration[5.1]
  def change
    add_reference :comments, :room, foreign_key: true
  end
end
