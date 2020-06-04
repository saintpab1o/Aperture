import React from 'react';
import { Link } from 'react-router-dom';




const Splash = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>

     <div className="splash-nav-header">
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

      


     
        <div  className= "splash-img">
      
            <img src="/assets/splash.jpg" alt="splash-img" width="1400" height="600"></img>
            <div class="splash-text-top">Discover and share</div>
            <div class="splash-text-mid">the world’s best</div>
            <div class="splash-text-bottom">photos</div>
            <div class="splash-mini-bottom">Get inspired with incredible photos from diverse styles and genres</div>
            <div class="splash-mini-bottom2">around the world. We're not guided by fads—just great photography.</div>
           
            
        </div>

        <div>
        <div className= "signup-button">
        <Link to="/signup">Sign up</Link>
          </div>
        </div>
  





    </div>
      
    
  );
  
  const welcomeMessage = () => (
     <div>
        <div className="splash-nav">
          <h1>Aperture</h1>
              <h2 >Welcome, {currentUser.username}!</h2>
            <button  onClick={logout}>Log Out</button>
         </div>
      </div>
  );

  return currentUser ? welcomeMessage() : sessionLinks();
};


export default Splash;
