require 'sinatra/json'
require './api/base'

module Api
  class Seeds < Base
    def delete_data
      db['employees'].remove
      db['orders'].remove
      db['locations'].remove
      db['places'].remove
    end

    def insert_data
      db['employees'].insert([
        {id: 1, name: "jim smith", prettyName: "",         email: "jim@void.com"      , city: "Miami", state: "FL", postalCode: "535352345"},
        {id: 2, name: "jane doe",  prettyName: "Jane Doe", email: "jane@blackhole.com", city: "",      state: ""  , postalCode: ""}
      ])

      db['orders'].insert([
        {
          order_number: "192849", sub_total: 19.95, tax: 2.37,
          items: [
            {name: "Teddy Bear", price: 9.95, color: 'blue'},
            {name: "Video Game", price: 10.00, version: '2.0_alpha'}
          ]
        },
        {
          order_number: "9319384", sub_total: 19.95, tax: 2.37,
          items: [
            {name: "Watering Can", price: 8.95, color: 'blue'},
            {name: "Plastic Tree", price: 11.00, size: 'XXL'}
          ]
        }
      ])

      db['locations'].insert([
        {id: 1, area: "Orlando", stateProvince: "FL", zip: "12345-1234"},
        {id: 2, area: "Tulsa",   stateProvince: "OK", zip: "55555-3333"},
        {id: 3, area: "Atlanta", stateProvince: "GA", zip: "90120-9999"}
      ])

      db['places'].insert([
        {id: 1, type: "country", iso2: "US", iso3: "USA", name: "United States of America"},
        {id: 2, type: "country", iso2: "CA", iso3: "CAN", name: "Canada"}
      ])

      db['accounts'].insert([
        {
          id: 1,
          companies: [
            {
              name: "Acme Corp",

              locations: [
                {id: 1, area: "Orlando", stateProvince: "FL", zip: "12345-1234"},
                {id: 2, area: "Tulsa",   stateProvince: "OK", zip: "55555-3333"},
                {id: 3, area: "Atlanta", stateProvince: "GA", zip: "90120-9999"}
              ],

              employees: [
                {id: 1, name:"jim smith", prettyName: "",         email: "jim@void.com"      , city: "Miami", state: "FL", postalCode: "535352345"},
                {id: 2, name:"jane doe",  prettyName: "Jane Doe", email: "jane@blackhole.com", city: "",      state: ""  , postalCode: ""}
              ]
            }
          ]
        }
      ])
    end

    get '/' do
      insert_data
      json status: "OK"
    end

    get '/reset' do
      delete_data
      insert_data
      json status: "OK"
    end

    get '/truncate' do
      delete_data
      json status: "OK"
    end
  end
end
