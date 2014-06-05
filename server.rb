require 'sinatra'

get '/' do
	send_file "public/placekitten.html"
end