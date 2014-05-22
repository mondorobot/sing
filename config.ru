require './app'

builder = Rack::Builder.new do
  map '/' do
    run App.main
  end
end

run builder
