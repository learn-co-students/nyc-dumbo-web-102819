class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :name
      t.string :author
      t.string :category
      t.integer :likes

      t.timestamps
    end
  end
end
