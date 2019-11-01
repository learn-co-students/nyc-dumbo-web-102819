class Alien
  attr_reader :name, :home_planet

  @@all = []

  def initialize(name, home_planet)
    @name = name
    @home_planet = home_planet

    @@all << self
  end

  def self.all
    @@all
  end

  def colonies
    # get all the colonies -> Colony.all
    # figure out which colonies belong to this specific alien
    # return them
    Colony.all.select do |colony_instance|
      self == colony_instance.alien
    end
  end

  def planets
    # look through all the colonies for this alien species
    # return the planets
    colonies.map do |colony|
      colony.planet
    end
  end



end #end of Alien class