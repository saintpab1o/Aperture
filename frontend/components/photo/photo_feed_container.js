import { connect } from 'react-redux';
import { getPhotos } from '../../actions/photo_actions';
import PhotoFeed from './photo_feed';


const mapStateToProps = state => {
    return {
        photos: Object.values(state.entities.photos)
        
    }
};

const mapDispatchToProps = dispatch => ({
    getPhotos: () => dispatch(getPhotos())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoFeed)