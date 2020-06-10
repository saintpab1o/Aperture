json.array! @photos do |photo|
    json.extract! photo, :id, :caption, :location, :photographer_id
    json.photoUrl url_for(photo.photo)
end