require './web/base'

module Web
  class Blog < Base
    get '/about' do
      'about us...'
    end
  end
end
