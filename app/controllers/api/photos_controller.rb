class Api::PhotosController < ApplicationController

    def index
        @photos = Photo.all
        render :index
    end

    def create
        @photo = Photo.new(photo_params)
        @photo.photographer_id = current_user.id
        if @photo.save
            render :index
        else
            render json: @photo.errors.full_messages, status: 422
    end
  end

    def show 
        @photo = Photo.find(params[:id])
        render :show
    end


    def photo_params
        params.require(:photo).permit(:caption, :location, :photo)
    end
    
end