import React from 'react';


class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caption: '',
            location: '',
            photographer_id: this.props.currentUser,
            photoFile: null,
            photoURL: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoURL: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo[caption]', this.state.caption);
        formData.append('photo[location]', this.state.location);
        formData.append('photo[photographer_id]', this.state.photographer_id);
        if (this.state.photoFile) {
            formData.append('photo[photo]', this.state.photoFile);
        }
        this.props.createPhoto(formData).then(() => this.props.history.push('/'))
    }




    render() {
        console.log(this.state);
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
               
                <label className='photo-caption-text'>Caption:
                    <input type='text'
                        value={this.state.title}
                        className='photo-caption-input'
                        onChange={this.handleInput('caption')} />
                </label>
                <br></br>

                <label className='photo-location-text'>Location:
                    <input type='text'
                        value={this.state.location}
                        className='photo-location-input'
                        onChange={this.handleInput('location')} />
                </label>

                
                <input type="file"

                    onChange={this.handleFile.bind(this)} />
                <h3>Image preview </h3>
                {preview}
                <button>Upload</button>
            </form>
        );
    }
}





    export default UploadForm;