import React from 'react';
import { withRouter } from 'react-router';
import PhotoIndexItem from './photo_index_item';


class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.photoId); 
    };

    


    render() { 
        const PhotoIndexItem = ({ photo }) => {

    return (
        <div className='photo-feed'>
            <Link to={`/photo/${photo.id}`}>
                <img className='photo-feed-item' src={photo.photoURL} />
            </Link>
            <div className="views">
                views:{photo.views}
            </div>
        </div>
    )
}
        return (
            <div>
                <div className="photo-feed">
                    <div className="photo">
                        <img className='photo-feed-item' src={Object.entries(this.props.photos)} />
                    </div>
                </div>
                
            </div>
        );
    }
}
export default PhotoShow;