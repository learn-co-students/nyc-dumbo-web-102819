class CreateSushis < ActiveRecord::Migration
  def change
    create_table :sushis do |t|
      t.string :name
    end
  end
end
