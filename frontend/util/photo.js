export const fetchPhotos = () => (
  $.ajax({
    method: 'get',
    url: '/api/photos'
  })
);

export const fetchPhoto = (photoId) => (
    $.ajax({
        method: 'GET',
        url: `api/photos/${photoId}`
    })
)  ; 

export const createPhoto = formData => (
  $.ajax({
    method: 'post',
    url: `/api/photos`,
    data: formData,
    contentType: false,
    processData: false
  })
);

