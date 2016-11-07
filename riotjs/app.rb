require "sinatra"
require "json"

post "/" do
  content_type :json
  data = {
    data: "is here"
  }
  return data
end
