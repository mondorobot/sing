require 'sinatra/base'
require 'sinatra-index'

module Web
  class Base < Sinatra::Base
    register Sinatra::Index
    use_static_index 'index.html'

    enable :sessions

    set :root, File.dirname(File.dirname(__FILE__))
  end
end
