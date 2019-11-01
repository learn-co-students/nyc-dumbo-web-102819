require 'pry'
require_relative 'models/alien'
require_relative 'models/colony'
require_relative 'models/planet'

mankind = Alien.new("mankind", "Earth")
klingon = Alien.new("Klingon", "somewhere?")
martian = Alien.new("Martian", "Mars")

korelia = Planet.new("Korelia")
endor = Planet.new("Endor")
krypton = Planet.new("Krypton")
earth = Planet.new("Earth")
mars = Planet.new("Mars")

# name, population, alien, planet
c1 = Colony.new("New York", 8_600_000, klingon, earth)
c2 = Colony.new("Black Hole Sun", 700, martian, mars)
c3 = Colony.new("New New York", 80, klingon, endor)

binding.pry
0