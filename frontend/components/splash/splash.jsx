import React from 'react';
import { Link } from 'react-router-dom';




const Splash = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>

     <div className="splash-nav-header">
           <Link to="/">Aperture</Link>
      </div>
           
      <div className="splash-nav">
       
      
      <div
         className= "splash-login">
      <Link to="/login">Log in</Link>
      </div>
      <br></br>
      

      <div className= "splash-signup">
        <Link to="/signup">Sign up</Link>
      </div>
      
      </div>

      


     
        <div  className= "splash-img">
      
           
            <img src={window.splashURL} alt="splash-img" width="1400" height="600"></img>

            <div className="splash-text-top">Discover and share</div>
            <div className="splash-text-mid">the world’s best</div>
            <div className="splash-text-bottom">photos</div>
            <div className="splash-mini-bottom">Get inspired with incredible photos from diverse styles and genres</div>
            <div className="splash-mini-bottom2">around the world. We're not guided by fads—just great photography.</div>
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



    <div className="splash-nav-header">
        <Link to="/">Aperture</Link>
    </div>
      
      <div id='button2'>
        <button  onClick={logout}>Log Out</button>
      </div>

      <div className="home-feed-text">
        <h3>Home Feed</h3>
        </div>

        <div className="home-feed-text2">
        <h4>Featured photographers</h4>
        </div>
        <div className="home-feed-text3">
        <p>Find photographers to follow</p>
 </div>


      
    </div>
  );

  return currentUser ? welcomeMessage() : sessionLinks();
};


export default Splash;
