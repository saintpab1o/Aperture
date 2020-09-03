import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions'
import { logout } from '../../actions/session_actions';
import UploadForm from './upload_form';


const mapStateToProps = state => {
    return ({
        currentUserId: state.session.currentUser.id
    })
}

const mapDispatchToProps = dispatch => ({
    createPhoto: (formData) => dispatch(createPhoto(formData)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(UploadForm)