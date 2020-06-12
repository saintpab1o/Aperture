import { connect } from 'react-redux';
import { getPhotos } from '../../actions/photo_actions';

import { logout } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getPhotos: () => dispatch(getPhotos())
});

export default connect(mapStateToProps,mapDispatchToProps)(Splash);
