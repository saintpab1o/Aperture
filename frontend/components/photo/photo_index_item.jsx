
import React from 'react';
import { Link } from 'react-router-dom';


const PhotoIndexItem = ({ photo }) => {
    return (
        <div className='photo-feed'>
            <Link to={`/photo/${photo.id}`}>
                <img className='photo-feed-item' src={photo.photoURL} />
            </Link>
        </div>
    )
}

export default PhotoIndexItem;