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

      


     
        <div  className="splash-img">
          <img src={window.splashURL} alt="splash-img" width="1400" height="600"></img>
        </div>

            <div className="splash-text-top">Discover and share</div>
            <div className="splash-text-mid">the world’s best</div>
            <div className="splash-text-bottom">photos</div>
            <div className="splash-mini-bottom">Get inspired with incredible photos from diverse styles and genres</div>
            <div className="splash-mini-bottom2">around the world. We're not guided by fads—just great photography.</div>
       

        

        <div className= "signup-button">
          <Link to="/signup">Sign up</Link>
          </div>


      <div className="mid-text-header">What makes us different</div>

    <div className="mid-content-container">
    
    <div className="grow-container">

      <div className="mid-text-grow">Grow as a photographer</div>

        <div className="mid-text-grow-sub">
          Get immediate exposure with your first upload.
          <br></br>
          Our Pulse algorithm surfaces new
          <br></br>
          photographs and photographers, ensuring
          <br></br>
          your photos are seen by the community so you
           <br></br>
          receive valuable feedback on day one.</div>

      </div>
    
    
    
      <div className="build-container">

        <div className="mid-text-build"> Build your career</div>

            <div className="mid-text-build-sub">
                Present yourself as a professional. Get hired 
              <br></br>
                by displaying your services, create a Directory
              <br></br> 
              listing, showcase the workshops you're 
              <br></br>
              holding, and create Galleries to highlight your 
              <br></br>
              work. </div>

      </div>
    

    
      <div className="performance-container">
        
      <div className="mid-text-performance">See how you're performing</div>
      
        <div className="mid-text-performance-sub">
              With Statistics and Pulse you get valuable 
            <br></br>
            insights into how your photos are performing
            <br></br>
            and how you rank in comparison to other 
            <br></br>photographers in the community.</div>

            </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
    
    <div className="mid-signup-container">
        <div className="mid-signup-container-content">

        
        
        <div className="mid-signup-top-text">Join our photography community today</div>
        <div className="mid-signup-bottom-text">We want fresh, creative talent like you. 
        Join our global network of like-minded creators to be inspired by incredible 
       </div>
        <div className="mid-signup-last-text">photos daily, and get rewarded for your talents.</div>

        <div className="bottom-purp-signup-button">
          <Link to="/signup">Sign up</Link>
        </div>
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
