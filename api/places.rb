require './api/rest'

module Api
  class Places < Rest
    def table_name
      'places'
    end
  end
end
