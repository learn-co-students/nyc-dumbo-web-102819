class Toy < ApplicationRecord

  validates_presence_of :name
  validates_uniqueness_of :name
  # validates :name, presence: true
end
