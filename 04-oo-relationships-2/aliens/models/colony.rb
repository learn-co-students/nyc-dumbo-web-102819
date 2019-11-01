class Colony
  attr_reader :name, :population, :alien, :planet

  @@all = []

  # name => String
  # population => Integer
  # alien => instance of Alien class
  # planet => instance of the Planet class
  def initialize(name, population, alien, planet)
    @name = name
    @population = population
    @alien = alien
    @planet = planet

    @@all << self
  end

  def self.all
    @@all
  end

end #end of Colony class