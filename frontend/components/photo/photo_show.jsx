import React from 'react';
import { withRouter } from 'react-router';
import PhotoIndexItem from './photo_index_item';



// import { logout } from '../../actions/session_actions';



class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
  
     
 

    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.photoId);
        
    };

    render() {
        // console.log(Object.entries())
        

        return (
            <div>
                <div className="photo-feed">
                    <div className="photo">
                        {/* <img className='photo-feed-item' src={} /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoShow;