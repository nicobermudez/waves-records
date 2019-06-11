require 'pry'
class Api::PhotosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @photo = Photo.new(image: params["image"])
    @photo.id = 1
    if(@photo)
      render json: {
        image: url_for(@photo.image)
      }
    else
      render json: {error: "Unable to upload photo"}
    end
  end

end
