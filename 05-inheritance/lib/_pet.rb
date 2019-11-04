class Pet

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def die
    "Urk.Urk.Urk."
  end

  def speak
    @thing_to_say * 3
  end

end

