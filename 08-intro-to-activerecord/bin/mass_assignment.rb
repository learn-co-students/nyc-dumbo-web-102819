require_relative "../config/environment"

class Clown
  attr_accessor :name, :age, :fears, :skill

  def initialize(arguments_hash)
    arguments_hash.each do |key, value|
      self.send("#{key}=", value)
    end
    # @name = arguments_hash[:name]
    # @age = arguments_hash[:age]
    # @fears = arguments_hash[:fears]
    # @skill = arguments_hash[:skill]
  end

end

krusty = Clown.new({age: 2, fears: "Children", skill: "Juggling Chainsaws", name: "Krusty"})
pennywise = Clown.new({name: "Pennywise", age: 45, fears: "Nothing", skill: "Luring children into sewer drains"})

binding.pry
"yay"