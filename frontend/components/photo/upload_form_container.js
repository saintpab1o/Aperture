import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions'

import UploadForm from './upload_form';

const mapStateToProps = state => {
    return ({
        currentUserId: state.session.id
    })
}

const mapDispatchToProps = dispatch => ({
    createPhoto: (formData) => dispatch(createPhoto(formData))
});

export default connect(mapStateToProps,mapDispatchToProps)(UploadForm)