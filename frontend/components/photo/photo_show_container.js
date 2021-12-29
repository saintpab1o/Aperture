import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
    return {
        photo: state.entities.photos[ownProps.match.params.photoId],
        photos: state.entities.photos,    
    }
};

const mapDispatchToProps = (dispatch) => ({
   fetchPhoto: id => dispatch(fetchPhoto(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow)