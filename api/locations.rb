require './api/rest'

module Api
  class Locations < Rest
    def table_name
      'locations'
    end
  end
end
