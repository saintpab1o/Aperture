import * as PhotoUtil from '../util/photo';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

export const receiveAllPhotos = data => ({
    type: RECEIVE_ALL_PHOTOS,
    data
});

export const receivePhoto = data => ({
    type: RECEIVE_PHOTO,
    data
});


export const getPhotos = () => dispatch => PhotoUtil.fetchPhotos()
    .then(photos => dispatch(receiveAllPhotos(photos)))

export const getPhoto = (id) => dispatch => PhotoUtil.fetchPhoto(id)
    .then(photo => dispatch(receivePhoto(photo)))

export const createPhoto = (formData) => dispatch => PhotoUtil.createPhoto(formData)
    .then(photo => dispatch(receivePhoto(photo)));