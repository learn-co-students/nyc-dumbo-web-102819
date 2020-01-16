class CreateUsersSnacks < ActiveRecord::Migration[5.2]
  def change
    create_table :users_snacks do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :snack, foreign_key: true

      t.timestamps
    end
  end
end
