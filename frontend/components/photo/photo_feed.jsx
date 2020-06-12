import React from 'react';
import PhotoIndexItem from './photo_index_item'

class PhotoFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        const photo = this.props.photos.map(photo => <PhotoIndexItem key={`photo.${photo.id}`} photo={photo} />)
        return (
            <div className='photo-container'>
                {photo}
            </div>
        )
    }
}

export default PhotoFeed;