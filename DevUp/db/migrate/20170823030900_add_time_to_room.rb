class AddTimeToRoom < ActiveRecord::Migration[5.1]
  def change
    add_column :rooms, :time, :string
  end
end
