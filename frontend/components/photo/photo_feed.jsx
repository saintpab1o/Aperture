import React from 'react';
import PhotoIndexItem from './photo_index_item'

class PhotoFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPhotos();
    }

    render() {
        const photo = this.props.photos.map(photo => (
            <PhotoIndexItem key={photo.id} photo={photo} />
        ));
        return (
            <div className='photo-feed'>
                {photo}
            </div>
        )
    }
}

export default PhotoFeed;