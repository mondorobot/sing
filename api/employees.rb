require './api/rest'

module Api
  class Employees < Rest
    def table_name
      'employees'
    end
  end
end
