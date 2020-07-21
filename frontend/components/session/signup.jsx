import React from 'react'
import { Link } from 'react-router-dom';




class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }




    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value}) 
        }
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createNewUser(this.state)
    }
    
    renderErrors() {
        return (
            <ul className='spaced'>
                {this.props.errors.map((error, i) => (
                    <li key={`err.${i}`}>{error}</li>
                ))}
            </ul>
        );
    }


    render () {
        return (
            <div>

                <div className="login-header-container">
                

                <div className="login-nav-header">
                    <Link to="/">Aperture</Link>
                </div>

            <div className="splash-nav">
                
               
                
                
                <div className= "splash-login">
                    <Link to="/login">Log in</Link>
                </div>
                

                <div className= "splash-signup">
                  <Link to="/signup">Sign up</Link>
             </div>

             </div>

            </div>

                

                <div className="outerbox">

                  
           

           <div
           
               className="signup-form-container">

                      

                        <div class="signup-text-top">Aperture.</div>

                            <div class="signup-text-bottom">Join us and start sharing today!</div>

                        

                    <form>
                            

                        <div className="signup-username">
                             <label>Username:
                                 <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInput('username')}
                                    />
                            </label>
                            </div>

                            <div className="signup-email">
                            <label>Email:
                               
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        </label>
                        </div>

                        <div className="signup-password">
                        <label>Password:
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                        </label>

                                <div className='container'>
                                    {this.renderErrors()}
                                </div>

                        </div>

                        <div>
                            <button className="sign-up-button" onClick={this.handleSubmit}>Sign Up</button>
                        </div>

                          

                    </form>
                            

                    </div>


                </div>

                <div className="footer">
                    <div className="left-footer">500px clone.</div>
                    
                </div>


            </div>
        )
    }
}

export default Signup;


