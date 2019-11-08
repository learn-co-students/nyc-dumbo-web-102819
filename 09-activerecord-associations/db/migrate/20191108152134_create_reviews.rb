class CreateReviews < ActiveRecord::Migration[5.2]
  def change

    create_table :reviews do |t|
      t.integer :rating
      t.integer :game_id
      t.integer :player_id

      t.timestamps
    end
  end
end
