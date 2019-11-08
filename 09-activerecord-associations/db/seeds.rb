Player.destroy_all
Game.destroy_all

# seed file will run Ruby code, we use this to populate our database
students = [ 
  "Bihelca", "Conrad", "Dominic", "Eric", "FanZhong", "Frankie",
  "Griffin", "Guligena", "Imade", "Jakarai", "James", "Kay",
  "Sadia", "Samir", "Soner", "Tristan"
]

consoles = [ "Switch", "PS4", "XBox", "PC" ]

# create a Player instance for each student and save it to the database
students.each do |student|
  # .sample picks a random item from an array
  Player.create(name: student, console: consoles.sample, age: rand(1..100))
end

# TODO: add Faker
20.times do
  Game.create(title: Faker::Game.title, genre: Faker::Game.genre)
end