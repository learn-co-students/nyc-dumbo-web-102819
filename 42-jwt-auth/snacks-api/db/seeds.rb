# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Snack.create(name: "Flamin' Hot Cheetos")
Snack.create(name: "Sun Chips")
Snack.create(name: "Lays")
Snack.create(name: "Sour Cream 'n Onion Lays")
Snack.create(name: "Barbecue Lays")
Snack.create(name: "Popcorn")
Snack.create(name: "Pretzels")
Snack.create(name: "Cheez-its")


dorothy = User.create(username: "dorothy.vaughan", password: "nasa")
sandi = User.create(username: "sandi.metz", password: "poodr")
alan = User.create(username: "alan.turing", password: "enigma")
grace = User.create(username: "grace.hopper", password: "univac")

User.all.each do |user|
  Snack.all.sample(3).each do |snack|
    user.snacks << snack
  end
end






