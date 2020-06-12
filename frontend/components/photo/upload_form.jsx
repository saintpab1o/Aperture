import React from 'react';
import { Link } from 'react-router-dom';


class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caption: '',
            location: '',
            photographerId: this.props.currentUserId,
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
        formData.append('photo[photographer_id]', this.state.photographerId);
        if (this.state.photoFile) {
            formData.append('photo[photo]', this.state.photoFile);
        }
        this.props.createPhoto(formData).then(() => this.props.history.push('/'))
    }




    render() {

        
        console.log(this.state);
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (


         <div>


                <div className="nav-container"> 

                <div className="login-nav-header">
                    <Link to="/">Aperture</Link>
                </div>


        </div>

       
            <div className="logout-button-container">

                <div>
                    <button className="logout-button-top1" onClick={this.props.logout}>Log Out</button>
                </div>
            </div>



            


        <div className="outerbox-upload">
             
    
            <div className="upload-form-container"> 

         

                    <div className="login-text-top">Upload Photos</div>



            <form onSubmit={this.handleSubmit.bind(this)}>

        <div className="upload-text-container">
               
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

                
           

                            <div>


                                <label className="file-button">

                                    <input type="file"



                                        onChange={this.handleFile.bind(this)} />
                                </label>

                            </div>

                <h3></h3>
                {preview}

                                <div>
                                    <button className="upload-button-bottom" onClick={this.handleSubmit}>Upload</button>
                                </div>

         </div>       


                




            </form>
        </div>

     </div>




    </div>      
        );
    }
}





    export default UploadForm;