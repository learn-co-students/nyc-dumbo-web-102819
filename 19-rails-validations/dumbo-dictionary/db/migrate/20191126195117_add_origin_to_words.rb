class AddOriginToWords < ActiveRecord::Migration[6.0]
  def change
    add_column :words, :origin, :string
  end
end
