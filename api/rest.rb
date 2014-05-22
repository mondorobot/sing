require 'sinatra/json'
require './api/base'

module Api
  class Rest < Base
    get '/' do
      result = db[table_name].find.to_a

      to_json result
    end

    put '/:id' do
      attributes = params.tap { |p| p.delete(:"_id") }
      identifier = {:"_id" => params[:"_id"]}

      result = db[table_name].update(identifier, attributes)

      to_json result
    end

    post '/' do
      result = db[table_name].insert params

      to_json result
    end

    delete '/' do
      if params[:"_id"]
        db[table_name].remove({
          "_id" => params[:"_id"]
        })
      end

      to_json status: "OK", message: "deleted"
    end
  end
end

