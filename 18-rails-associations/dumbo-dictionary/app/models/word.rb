class Word < ApplicationRecord

  def self.search(word)
    Word.where('name like ?', "%#{word}%")
  end

end
