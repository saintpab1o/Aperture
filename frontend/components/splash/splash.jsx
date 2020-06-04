import React from 'react';
import { Link } from 'react-router-dom';



const Splash = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up!</Link>
    </div>
  );
  
  const welcomeMessage = () => (
     <div>
      <h2 >Hi, {currentUser.username}!</h2>
      <button  onClick={logout}>Log Out</button>
      </div>
  );

  return currentUser ? welcomeMessage() : sessionLinks();
};


export default Splash;
