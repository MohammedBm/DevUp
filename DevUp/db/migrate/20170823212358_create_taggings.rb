class CreateTaggings < ActiveRecord::Migration[5.1]
  def change
    create_table :taggings do |t|
      t.references :room, foreign_key: true, index: true
      t.references :tag, foreign_key: true, index: true

      t.timestamps
    end
  end
end
