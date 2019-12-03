class AddPriceToNachos < ActiveRecord::Migration[5.2]
  def change
    add_column :nachos, :price, :integer, default: 15
  end
end
