import React from 'react';
import SignupContainer from './session/signup_container'
import SplashContainer from './splash/splash_container'
import LoginContainer from './session/login_container'

import {Route} from 'react-router-dom'



const App = () => (
  <div>
    <h1>Aperture</h1>
    <Route exact path="/" component={SplashContainer} />
    <Route exact path="/login" component={LoginContainer} />
    
    <Route path="/signup" component={SignupContainer} />


  </div>
);

export default App;