class Game < ActiveRecord::Base

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

end