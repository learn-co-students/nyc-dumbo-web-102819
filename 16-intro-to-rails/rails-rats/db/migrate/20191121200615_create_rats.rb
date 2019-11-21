class CreateRats < ActiveRecord::Migration[5.2]
  def change
    create_table :rats do |t|
      t.string :name
      t.integer :weight

      t.timestamps
    end
  end
end
