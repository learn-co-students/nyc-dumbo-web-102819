require 'pry'
require_relative 'models/user'
require_relative 'models/tweet'

coffee_dad = User.new("coffee_dad")

t1 = coffee_dad.post_tweet("coffee coffee")
t2 = coffee_dad.post_tweet("mmm coffee")
t3 = coffee_dad.post_tweet("having #a coffee")
t4 = coffee_dad.post_tweet("ok")

binding.pry
0