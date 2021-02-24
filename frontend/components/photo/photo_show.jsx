import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.photoId); 
        
    };

    render() { 
        const photo = this.props.photo;
        return (
            <div>
                <div className="photo-feed">
                    <div className="photo">
                        <img className='photo-feed-item' src={photo} />
                        <div className="like-icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoShow;