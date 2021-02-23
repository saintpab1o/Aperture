import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.photoId); 
    };

    render() { 
        const photo = this.props.photo;
        console.log(photo)

        const welcomeMessage = () => (
            <div>
                <div className="nav-container">
                    <div className="splash-nav-header">
                        <Link to="/">Aperture</Link>
                    </div>
                </div>

                <div className="logout-button-container">
                    <div className="upload-button-top">
                        <Link to="/upload">Upload</Link>
                    </div>

                    <div>
                        <button className="logout-button-top" onClick={this.props.logout}>
                            Log Out
                        </button>
                    </div>
                </div>

                <div className="home-feed-text">
                    <h3>Home Feed</h3>
                </div>

                <div className="home-feed-text2">
                    <h4>Featured photographers</h4>
                </div>

                <div className="home-feed-text3">
                    <p>Find photographers to follow</p>
                </div>
            </div>
        )
        return (    
            <div>
                {welcomeMessage()}
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