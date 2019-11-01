class Planet
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name

    @@all << self
  end

  def self.all
    @@all
  end

  def colonies
    # return all the colonies on this planet
  end

  def aliens
    # return all the alien species who have colonized it
  end

end #end of Planet class