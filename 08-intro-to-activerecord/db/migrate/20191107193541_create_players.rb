class CreatePlayers < ActiveRecord::Migration[5.2]
  def up
    create_table :players do |t|
      t.string :name
      t.integer :age
      t.string :console
      
      t.timestamps
      # created_at, updated_at
    end
  end

  def down
    drop_table :players
  end
end
