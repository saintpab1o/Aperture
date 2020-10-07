import React from 'react';



// import { logout } from '../../actions/session_actions';



class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            count: 1,
            start: 1,
        }
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.photoId);
        
    };





    render() {
        // const photo = this.props.photos.map(photo => (
        //     <PhotoShow key={photo.id} photo={photo} />
        // ));
        return (
            <div>
                <div className="photo-feed">
                    <div className="photo">
                        {/* {photo} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoShow;