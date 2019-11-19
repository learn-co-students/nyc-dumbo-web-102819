class CreateRats < ActiveRecord::Migration
  def change
    create_table :rats do |t|
      t.string :name
      t.integer :tail_length
      t.string :size
      t.integer :weight

      t.timestamps
    end
  end
end
