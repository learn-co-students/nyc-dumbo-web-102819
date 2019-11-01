require 'pry'
require_relative 'models/user'
require_relative 'models/tweet'

user = User.new("coffee_dad")

t1 = Tweet.new("coffee coffee", user)
t2 = Tweet.new("mmm coffee", user)
t3 = Tweet.new("having #a coffee", user)
t4 = Tweet.new("ok", user)

binding.pry
0