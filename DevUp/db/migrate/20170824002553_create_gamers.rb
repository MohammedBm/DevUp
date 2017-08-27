class CreateGamers < ActiveRecord::Migration[5.1]
  def change
    create_table :gamers do |t|
      t.references :user, foreign_key: true, index: true
      t.references :room, foreign_key: true, index: true

      t.timestamps
    end
  end
end
