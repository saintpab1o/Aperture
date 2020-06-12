import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';

import { logout } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchPhotos: () => dispatch(getPhotos())
});

export default connect(mapStateToProps,mapDispatchToProps)(Splash);
