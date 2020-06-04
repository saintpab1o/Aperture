import React from 'react'



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
                <h2>Login!</h2>
                    <form>
                        <label>Username:
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                            />
                        </label>
                      
                        <label>Password:
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                        </label>
                        <button onClick={this.handleSubmit}>Login</button>
                    </form>
            </div>
        )
    }
}

export default LoginForm;


