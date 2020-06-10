class Api::PhotosController < ApplicationController

    def index
        @photos = Photo.all
        render: index
    end

    def create
        @photo = Photo.new(photo_params)
        if @photo.save
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
    end
  end

    def show 
        @photo = Photo.find(params[:id])
        render :show
    end


    def photo_params
        params.require(:photo).permit(:caption, :location, :photographer_id, :photo)
    end
    
end