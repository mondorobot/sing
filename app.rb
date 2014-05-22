require './api/rack'
require './web/rack'

class App
  def self.main
    Rack::Builder.new do
      map '/' do
        run Web.main
      end

      map '/api' do
        run Api.main
      end
    end
  end
end
