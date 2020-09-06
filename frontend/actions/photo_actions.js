import * as PhotoUtil from '../util/photo';
export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const LOAD_PHOTOS = "LOAD_PHOTO"

export const fetchPhotos = () => dispatch => {
    return PhotoUtil.fetchPhotos().then(photos => {
        return dispatch({ type: RECEIVE_ALL_PHOTOS, photos })
    });
};

export const fetchPhoto = (id) => dispatch => {
    return PhotoUtil.fetchPhoto(id).then(photo => {
        return dispatch({ type: RECEIVE_PHOTO, photo })
    });
};

export const createPhoto = (formData) => dispatch => PhotoUtil.createPhoto(formData)
    .then(photo => dispatch(receivePhoto(photo)));

export const loadPhotos = () => (dispatch) => {
  return PhotoUtil.fetchPhotos().then((photos) => {
    return dispatch({ type: RECEIVE_ALL_PHOTOS, photos });
  });
};

// export const receiveAllPhotos = data => ({
//     type: RECEIVE_ALL_PHOTOS,
//     data
// });

// export const receivePhoto = data => ({
//     type: RECEIVE_PHOTO,
//     data
// });
