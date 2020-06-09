export const fetchPhotos = () => (
    $.ajax({
        method: 'GET',
        url: '/api/photos'
    })
);

export const fetchPhoto = (photoId) => (
    $.ajax({
        method: 'GET',
        url: `api/photos/${photoId}`
    })
)  ; 


export const createPhoto = (photo) => (
    $.ajax({
        method: 'POST',
        url: '/api/photos',
        photo,
        contentType: false,
        processData: false
    })
);

