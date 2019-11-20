class CreateMeals < ActiveRecord::Migration
  def change
    create_table :meals do |t|
      t.string :name
      t.integer :calories
      t.boolean :tasty
      t.integer :rat_id

      t.timestamps null: false
    end
  end
end
