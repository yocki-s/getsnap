require './server'
require 'rack-zippy'

`bundle exec middleman build`

use Rack::Zippy::AssetServer, 'public'
run Sinatra::Application