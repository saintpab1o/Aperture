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
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    };

 





    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo[caption]', this.state.caption);
        formData.append('photo[location]', this.state.location);
        formData.append('photo[photographer_id]', this.state.photographerId);
        formData.append('photo[photo]', this.state.photoFile);
        
        const cuid = this.props.currentUserId
        this.props.createPhoto(formData).then(() => {
            
            return this.props.history.push('/photos')
        });
    };




    render() {

        
        console.log(this.state);
        const preview = this.state.photoUrl ? <img className='image-preview' src={this.state.photoUrl} /> : <img className='image-preview' height='150px' width='150px' />;
        return (


         <div>


                <div className="nav-container"> 

                <div className="login-nav-header">
                    <Link to="/">Aperture</Link>
                </div>


        </div>

                <div className="logout-button-container">

                    <div className="upload-button-top">
                        <Link to="/upload">Upload</Link>
                    </div>

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

                                    {preview}

                            </div>

                

               

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