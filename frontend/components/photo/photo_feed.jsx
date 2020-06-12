import React from 'react';
import PhotoIndexItem from './photo_index_item'
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

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

            <div>

                <div className="nav-container">

                    <div className="login-nav-header">
                        <Link to="/">Aperture</Link>
                    </div>


                </div>

                <div className="logout-button-container">

                    <div className="upload-button-top">
                        <Link to="/upload">Upload</Link>
                    </div>

                    <div>
                        <button className="logout-button-top" onClick={this.props.logout}>Log Out</button>
                    </div>
                </div>

          



                  


           



            <div className='photo-feed'>
                
                
                <div className='photo'>

                    {photo}
                </div>

            </div>




                <div className="footer">
                    <div className="left-footer">500px clone.</div>
                </div>


            </div>
        )
    }
}

export default PhotoFeed;