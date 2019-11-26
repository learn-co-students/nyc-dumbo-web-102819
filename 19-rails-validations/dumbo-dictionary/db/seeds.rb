# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "destroying the words..."
Word.destroy_all

puts "creating new words..."
Word.create(
  name: "Rails",
  author: "Ian",
  category: "Mod 2",
  likes: 1
)

Word.create(
  name: "Green Check Syndrome",
  author: "Griffin",
  category: "All of Flatiron",
  likes: 5
)

Word.create(
  name: "WeWork Metal Cups",
  author: "Samir",
  category: "After Hours",
  likes: 16
)

puts "Done!"