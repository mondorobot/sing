require 'rack'

require './web/index'
require './web/blog'

module Web
  def self.main
    Rack::Builder.new do
      map '/' do
        run ::Web::Index
      end

      map '/blog' do
        run ::Web::Blog
      end
    end
  end
end
