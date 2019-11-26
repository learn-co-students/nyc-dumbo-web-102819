class Word < ApplicationRecord
  has_many :definitions, dependent: :destroy

  def self.search(word)
    Word.where('name like ?', "%#{word}%")
  end

end
