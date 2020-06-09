import * as PhotoUtil from '../util/photo';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

const receiveAllPhotos = photo => {
    const { photos, users } = photo;
    return ({
        type: RECEIVE_ALL_PHOTOS,
        photos,
        users
    })
};

const receivePhoto = photo => {
    const { photos, users } = photo;
    return ({
        type: RECEIVE_PHOTO,
        photos,
        users
    })
};

export const getPhotos = () => dispatch => PhotoUtil.fetchPhotos()
    .then(photos => dispatch(receiveAllPhotos(photos)))

export const getPhoto = (id) => dispatch => PhotoUtil.fetchPhoto(id)
    .then(photo => dispatch(receivePhoto(photo)))

export const createPhoto = (data) => dispatch => PhotoUtil.createPhoto(data)
    .then(photo => dispatch(receivePhoto(photo)));