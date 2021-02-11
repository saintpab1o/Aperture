import React from 'react';
import { withRouter } from 'react-router';
import PhotoIndexItem from './photo_index_item';


class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoUrl: [],

        }
    }

    

    componentDidMount() {
        
        this.props.fetchPhoto(this.props.match.params.photoId);
       
    };


// Object.entries(this.props.photos)
    render() { 
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