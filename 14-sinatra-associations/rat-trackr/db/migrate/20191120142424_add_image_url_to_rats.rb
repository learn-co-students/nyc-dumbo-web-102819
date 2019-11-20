class AddImageUrlToRats < ActiveRecord::Migration
  def change
    add_column :rats, :image_url, :string
  end
end
