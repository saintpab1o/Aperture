import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import { loadPhotos } from '../../actions/photo_actions';
import PhotoFeed from './photo_feed';


const mapStateToProps = state => {
    return {
        photos: Object.values(state.entities.photo),
    }
};

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  logout: () => dispatch(logout()),
  loadPhotos: () => dispatch(loadPhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoFeed)