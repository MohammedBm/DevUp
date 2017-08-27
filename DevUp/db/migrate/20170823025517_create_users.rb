class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :username
      t.string :email, index: {unique: true}
      t.string :password_digest

      t.timestamps
    end
  end
end
