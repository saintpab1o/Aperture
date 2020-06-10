json.array! @photos do |photo|
    json.extract! photo, :id, :caption, :location, :photographer_id
  
    
end