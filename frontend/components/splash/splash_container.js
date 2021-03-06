import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import { fetchPhoto } from '../../actions/photo_actions';
import { logout } from '../../actions/session_actions';
import Splash from './splash';




const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser,
    photos: Object.values(state.entities.photos)
  })
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchPhoto: () => dispatch(fetchPhoto()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Splash);
