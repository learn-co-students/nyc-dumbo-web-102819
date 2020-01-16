class UsersSnack < ApplicationRecord
  belongs_to :user
  belongs_to :snack
end
