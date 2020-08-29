import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



const PhotoIndexItem = ({ photo }) => {

    return (
        <div className='photo-feed'>
            <Link to={`/photo/${photo.id}`}>
                <img className='photo-feed-item' src={photo.photoURL} />
                <div className="like-icon">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
            </Link>
                <div className="views">
            </div>
        </div>
    )
}

export default PhotoIndexItem;