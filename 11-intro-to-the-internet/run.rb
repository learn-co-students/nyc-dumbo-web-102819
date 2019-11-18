require 'sinatra'

# request
get '/' do
  
  # response
  '<html><head></head><body><h1>hi</h1></body></html>'
end

# request
get '/french_toast' do

  # response
  '<html><head></head><body><h1>Get that 🍞</h1></body></html>'
end

get '/italian_toast' do
  "Hello World"
end

# if http_verb == 'get' && route == '/'
  # return "hi"
# elsif http_verb == 'get' route == '/french_toast'
  # return "Get that 🍞"