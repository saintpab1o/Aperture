import React from 'react'
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
        this.props.login(this.state)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.login(this.props.demoUser)
    }

    renderErrors() {
        return (
            <ul className='session-error-list'>
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
                className="form-container1">
                    <form>
                            <div className="login-text-top">Log in to Aperture</div>  
                        <div 
                            className="username-input">

                            <label>Username:
                                <br></br>
                            <   input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInput('username')}
                            />
                            </label>
                            
                        </div>
                          

                        <br></br>

                        <div 
                            className="password-input">
                      
                        <label>Password:

                            <br></br>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                        </label>

                              
                            
                        
                        </div>

                            <div className='session-error-container-login'>
                                {this.renderErrors()}
                            </div>

                           
            <div className="bottom-form-container">

                    <div className="login-button-container">
                        <div>
                            <button className="login-button-bottom" onClick={this.handleSubmit}>Login</button>
                        </div>

                                               
                        <div>
                            <button className='demo-login-button' onClick={this.handleClick}>Demo Login</button>
                        </div>

                        
                    

                    <div className="login-button-text-container">

                                <div className="login-button-text-sub">
                                    Don't have an account?  
                                </div>


                                <div id="login-button-text-link">
                                    <Link to="/signup">Sign up</Link>
                                </div>

                                </div>

                 </div>

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

export default LoginForm;


