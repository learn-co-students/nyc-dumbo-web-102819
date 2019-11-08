class Game < ActiveRecord::Base
  has_many :reviews
  has_many :players, through: :reviews

  # def reviews
  #   # find the reviews associated with this game
  #   # Review.where(game_id: self.id)

  #   Review.all.select do |review|
  #     self.id == review.game_id
  #   end
  # end

  # def players
  #   reviews.map do |review|
  #     review.player
  #   end
  # end

  # Create
  # Game.new - creates a Ruby instance 
  # Game#save - persists to the database
  # Game.create - new + save

  # Read
  # Game.all
  # Game.first - get the first one
  # Game.last - get the last one
  # Game.find(id) - get one by the id
  # Game.find_by(title: "GTA 5") - takes a hash and returns one instance
  # Game.where() - takes a hash or a string and returns a collection

  # Update
  # Game#update - take a hash and save to the database
  # Game#save - saves anything that has changed on the instance
  # Game.update - update everythings

  # Delete
  # Game#destroy

end