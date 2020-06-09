import {connect} from 'react-redux'
import {createNewUser, clearErrors} from '../../actions/session_actions'
import Signup from './signup'

const mapStateToProps = ({ errors }) => {
    return {
      errors: errors.session,
    };
  };

const mapDispatchToProps = dispatch => ({
    createNewUser: user => dispatch(createNewUser(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup)