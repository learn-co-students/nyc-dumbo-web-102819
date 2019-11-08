class Review < ActiveRecord::Base
  belongs_to :player
  belongs_to :game

  # def game
  #   Game.find_by(id: self.game_id)
  # end

  # def player
  #   Player.find(self.player_id)
  # end

end