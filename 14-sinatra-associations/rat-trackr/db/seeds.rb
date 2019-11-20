Rat.destroy_all

sizes = %w(small medium large)
prefixes = %w(extra xx)
rat_pics = [
  "http://mymodernmet.com/wp/wp-content/uploads/2017/07/pet-rat-photography-diane-ozdamar-12.jpg",
  "https://img.huffingtonpost.com/asset/596fbe732100003700fc7c1c.jpeg?cache=2vygggifqj&ops=scalefit_630_noupscale",
  "http://earthporm.com/wp-content/uploads/2015/04/cute-pet-rats-13__880.jpg",
  "http://mymodernmet.com/wp/wp-content/uploads/2017/07/pet-rat-photography-diane-ozdamar-8.jpg",
  "https://external-preview.redd.it/gRvZZbhByMbG5buwx_EflRknZvAKBjkoYYp5_1mFjXk.jpg?width=550&auto=webp&s=e12ec2281e45e32808931b40bb9a228c49585a9e",
  "http://mymodernmet.com/wp/wp-content/uploads/2017/07/pet-rat-photography-diane-ozdamar-11.jpg",
  "https://img.buzzfeed.com/buzzfeed-static/static/2014-09/3/13/enhanced/webdr07/longform-original-12366-1409764114-11.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*",
  "https://i.pinimg.com/236x/19/16/b6/1916b6b68d0f12188c67e0b79cd65ec3--fancy-rat-cute-rats.jpg",
  "https://img.buzzfeed.com/buzzfeed-static/static/2014-09/4/10/campaign_images/webdr10/marty-the-rat-will-change-how-you-feel-about-pet--2-19174-1409839836-0_dblbig.jpg",
  "http://www.hdnicewallpapers.com/Walls/Big/Mouse/Cute_White_Rat_Baby_in_Cup.jpg",
  "http://www.cutestpaw.com/wp-content/uploads/2015/12/s-that-is-such-a-cute-rat.jpg"
]

rat_pics.each do |pic|
  if rand > 0.5
    size = sizes.sample
  else
    size = "#{prefixes.sample} #{sizes.sample}" 
  end
  Rat.create(
    name: "#{Faker::Superhero.prefix} #{Faker::Food.dish.split.first}",
    weight: rand(100..9999),
    tail_length: rand(1..20),
    size: size,
    image_url: pic
  )
end