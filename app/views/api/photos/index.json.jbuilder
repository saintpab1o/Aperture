json.array! @photos do |photo|
  json.extract! photo, :id, :caption, :location, :views
  json.photoURL url_for(photo.photo)
end