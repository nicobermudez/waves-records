require 'pry'
Rails.application.config.middleware.use OmniAuth::Builder do
  binding.pry
  provider :spotify, ENV["SPOTIFY_ID"], ENV["SPOTIFY_SECRET"]
end
