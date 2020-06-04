import React from 'react';
import SignupContainer from './session/signup_container'
import SplashContainer from './splash/splash_container'
import LoginContainer from './session/login_container'
import {Route} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_utils';



const App = () => (
  <div>
    <h1>Aperture</h1>
    <Route exact path="/" component={SplashContainer} />
    <AuthRoute exact path="/login" component={LoginContainer} /> 
    <AuthRoute path="/signup" component={SignupContainer} />


  </div>
);

export default App;