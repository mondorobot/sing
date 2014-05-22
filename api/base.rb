require 'sinatra/base'
require 'mongo'

include Mongo

module Api
  class Base < Sinatra::Base
    enable :sessions

    def to_json(data)
      if data.is_a? Array
        data = data.map { |x|
          x['_id'] = x['_id'].to_s
          x
        }
      else
        data['_id'] = data['_id'].to_s
      end

      json data
    end

    # database configuration
    def db
      @_db ||= MongoClient.new.db('ngxample')
    end
  end
end
