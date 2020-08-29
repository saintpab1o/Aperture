import React from 'react';



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
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoShow;