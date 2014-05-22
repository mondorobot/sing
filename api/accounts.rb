require './api/rest'

module Api
  class Accounts < Rest
    def table_name
      'accounts'
    end
  end
end
