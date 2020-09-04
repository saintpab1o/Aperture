json.extract! @photo, :id, :caption, :location, :photographer_id, :views
json.photoUrl url_for(@photo.photo)

