import React from 'react';
import SignupContainer from './session/signup_container'
import SplashContainer from './splash/splash_container'
import LoginContainer from './session/login_container'
import UploadFormContainer from './photo/upload_form_container'
import PhotoFeedContainer from './photo/photo_feed_container'

import {Route} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_utils';



const App = () => (
  <div>
 
    <Route exact path="/" component={SplashContainer} />
    <AuthRoute exact path="/login" component={LoginContainer} /> 
    <AuthRoute path="/signup" component={SignupContainer} />
    <ProtectedRoute path='/upload' component={UploadFormContainer} />
    <Route exact path='/discover' component={PhotoFeedContainer} />


  </div>
);

export default App;