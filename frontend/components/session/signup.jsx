import React from 'react'
import { Link } from 'react-router-dom';



class Signup extends React.Component {
    constructor(props) {
        super(props)
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

    handleSubmit(e){
        e.preventDefault();
        this.props.createNewUser(this.state)
        
        
        
    }


    render () {
        return (
            <div>

                <div class="signup-text-top">Start Your Journey Today!</div>

                <div className="login-nav-header">
                    <Link to="/">Aperture</Link>
                </div>

                <div className="splash-nav">
                
               
                
                
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
               className="signup-form-container">

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
                        </div>

                        <div id='button1'>
                            <button onClick={this.handleSubmit}>Sign Up</button>
                        </div>

                    </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;


