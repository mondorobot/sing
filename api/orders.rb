require './api/rest'

module Api
  class Orders < Rest
    def table_name
      'orders'
    end
  end
end
