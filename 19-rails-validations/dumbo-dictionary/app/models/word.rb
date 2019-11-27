class Word < ApplicationRecord
  has_many :definitions, dependent: :destroy

  validates :likes, presence: true
  validates :name, presence: true, 
                    uniqueness: true, 
                    length: { minimum: 2 }

  validate :likes_cant_be_float

  def likes_cant_be_float
    if self.likes.nil?
      errors.add(:likes, "can't be nil")
    end
    # if expiration_date.present? && expiration_date < Date.today
    #   errors.add(:expiration_date, "can't be in the past")
    # end
  end

  # name -> must have at least two characters
  # name -> unique
  # likes -> greater than or equal to zero
  
  # likes -> can't be a float

  def self.search(word)
    Word.where('name like ?', "%#{word}%")
  end

end
