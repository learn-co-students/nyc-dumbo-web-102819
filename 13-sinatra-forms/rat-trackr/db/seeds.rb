Rat.destroy_all

sizes = %w(small medium large)
prefixes = %w(extra xx)

25.times do
  if rand > 0.5
    size = sizes.sample
  else
    size = "#{prefixes.sample} #{sizes.sample}" 
  end
  Rat.create(
    name: "#{Faker::Superhero.prefix} #{Faker::Food.dish.split.first}",
    weight: rand(100..9999),
    tail_length: rand(1..20),
    size: size
  )
end