
import React from 'react';
import { Link } from 'react-router-dom';


class PhotoIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
             <div className='photo-feed'>
                <Link to={`/photo/${this.props.photo.id}`}>
                 <img className='photo-feed-item' src={this.props.photo.photoURL} />
             </Link>
            </div>
         )
    }
}

export default PhotoIndexItem;