import React from 'react';
import SignupContainer from './session/signup_container'
import SplashContainer from './splash/splash_container'
import LoginContainer from './session/login_container'
import UploadFormContainer from './photo/upload_form_container'
import PhotoFeedContainer from './photo/photo_feed_container'
import { Switch } from 'react-router-dom'

import {Route,} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_utils';



const App = () => (
  <div>
 
   
    <Switch>
        <Route exact path="/" component={SplashContainer} />
        
        <ProtectedRoute exact path='/home' component={PhotoFeedContainer} />
        <ProtectedRoute exact path='/upload' component={UploadFormContainer} />

        <AuthRoute exact path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
      </Switch>
     
  

   

    
    


  </div>
);

export default App;