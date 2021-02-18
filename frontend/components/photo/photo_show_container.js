import { connect } from 'react-redux';
import { fetchPhoto, fetchPhotos } from '../../actions/photo_actions';
import PhotoShow from './photo_show';


const mapStateToProps = (state, ownProps) => {
    return {
        photos: state.entities.photos,
        photo: state.entities.photos[ownProps.match.params.photoId]
    }
};

const mapDispatchToProps = (dispatch) => ({
   fetchPhoto: id => dispatch(fetchPhoto(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow)

// pics: Object.values(state.entities.photos)