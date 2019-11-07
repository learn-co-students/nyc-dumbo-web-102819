require 'pry'
require_relative 'models/user'
require_relative 'models/tweet'

coffee_dad = User.new("coffee_dad")
tea_mom = User.new("tea_mom")

t1 = coffee_dad.post_tweet("coffee coffee")
t2 = coffee_dad.post_tweet("mmm coffee")
t3 = coffee_dad.post_tweet("having #a coffee")
t4 = coffee_dad.post_tweet("ok")

t5 = tea_mom.post_tweet("yay for T")
t6 = tea_mom.post_tweet("T! T! T!")

binding.pry
0