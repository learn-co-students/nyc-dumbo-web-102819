class CreateRats < ActiveRecord::Migration
  def change
    create_table :rats do |t|
      t.string :name
      t.integer :weight

      t.timestamps null: false
    end
  end
end
