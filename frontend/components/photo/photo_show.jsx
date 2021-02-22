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
        const photo = this.props.photo;
        console.log(this.props.photo)
        return (
            <div>
                <div className="photo-feed">
                    <div className="photo">
                        <img className='photo-feed-item' src={photo} />
                    </div>
                </div>
            </div>
        );
    }
}
export default PhotoShow;