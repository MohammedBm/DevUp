class CreateRooms < ActiveRecord::Migration[5.1]
  def change
    create_table :rooms do |t|
      t.string :title
      t.string :creater
      t.string :activity
      t.string :game

      t.timestamps
    end
  end
end
