require './web/base'

module Web
  class Index < Base
    get '/login' do
      # {status: "OK", token: "a38833af1d28a92228dc3ed5b640b2def9917dcfef350e0d2d1e10397d9c25734242837b"}
      content_type "application/json"
      '{status: "OK", token: "aaf1d28"}'
    end
  end
end
