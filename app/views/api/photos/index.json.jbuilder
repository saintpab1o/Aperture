json.array! @photos do |photo|
  json.extract! photo, :id, :caption, :location
  json.photoURL url_for(photo.photo)
end