json.array! @photos do |photo|
  json.extract! photo, :id, :caption, :location
  json.photoUrl url_for(photo.photo)
end