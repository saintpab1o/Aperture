import React from 'react'
import { Link } from 'react-router-dom';



class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value}) 
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state)
        
      
}


    render () {
        return (
            <div>

                <div className="login-nav-header">
                    <Link to="/">Aperture</Link>
                </div>

                <div className="splash-nav">
                
                <div class="login-text-top">Log in to Aperture</div>
                
                
                <a className= "splash-login">
                    <Link to="/login">Log in</Link>
                     <br></br>
                </a>

                <div className= "splash-signup">
                    <a><Link to="/signup">Sign up</Link></a>
             </div>
             </div>

            <div className="outerbox">
           

                <div
                    className="form-container">
                
               
                    <form>
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

                        <div className="login-button"> 
                           <button onClick={this.handleSubmit}>Login</button>
                        </div>

                        <div className="account-text"> 
                            Don't have an account? 
                        </div>
                        
                        <div className="account-link"> 
                        <a><Link to="/signup">Sign up</Link></a>
                        </div>

                    </form>
                </div>
            

            </div>
            </div>
        )
    }
}

export default LoginForm;


