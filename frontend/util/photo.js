export const fetchPhotos = () => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/photos`
    })
  )
}

export const fetchPhoto = (photoId) => (
    $.ajax({
        method: 'GET',
        url: `api/photos/${photoId}`
    })
)  ; 


export const createPhoto = (formData) => (
    $.ajax({
        method: 'POST',
        url: `/api/photos`,
        data: formData,
        contentType: false,
        processData: false
    })
);

