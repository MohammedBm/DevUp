class AddLimitToRoom < ActiveRecord::Migration[5.1]
  def change
    add_column :rooms, :limit, :integer
  end
end
