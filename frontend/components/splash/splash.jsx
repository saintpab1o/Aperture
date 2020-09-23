import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faHammer} from '@fortawesome/free-solid-svg-icons'
import { faChartBar} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faAngellist} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import PhotoIndexItem from '../photo/photo_index_item';
import InfiniteScroll from "react-infinite-scroll-component";






class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      count: 1,
      start: 1,
    };
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }
  
  fetchNextPhotos(){
    
  }

  

  render() {
    
    const photo = this.props.photos.map((photo) => (
      <PhotoIndexItem key={photo.id} photo={photo} 
      />
      
    ));

    const sessionLinks = () => (
      <div>
        <div className="splash-nav-header">
          <div className="aperture-header">
            <Link to="/">Aperture</Link>
          </div>

          <div className="brand-container">
            <div className="brand-icon">
              {" "}
              <a href="https://www.linkedin.com/in/paulmagioncalda/">
                {" "}
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="brand-icon">
              {" "}
              <a href="https://github.com/saintpab1o">
                {" "}
                <FontAwesomeIcon icon={faGithub} />
              </a>{" "}
            </div>
            <div className="brand-icon">
              {" "}
              <a href="https://angel.co/u/paul-magioncalda">
                {" "}
                <FontAwesomeIcon icon={faAngellist} />
              </a>{" "}
            </div>
          </div>
        </div>

        <div className="splash-nav">
          <div className="splash-login">
            <Link to="/login">Log in</Link>
          </div>

          <div className="splash-signup">
            <Link to="/signup">Sign up</Link>
          </div>
        </div>

        <div className="splash-img">
          <img
            src={window.splashURL}
            alt="splash-img"
            width="100%"
            height="100%"
          ></img>
        </div>

        <div className="splash-text-top">Discover and share</div>
        <div className="splash-text-mid">the world’s best</div>
        <div className="splash-text-bottom">photos</div>
        <div className="splash-mini-bottom">
          Get inspired with incredible photos from diverse styles and genres
        </div>
        <div className="splash-mini-bottom2">
          around the world. We're not guided by fads—just great photography.
        </div>

        <div className="signup-button">
          <Link to="/signup">Sign up</Link>
        </div>

        <div className="mid-text-header">What makes us different</div>

        <div className="mid-content-container">
          <div className="grow-container">
            <div className="icon">
              <FontAwesomeIcon icon={faSeedling} />
            </div>

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
              receive valuable feedback on day one.
            </div>
          </div>

          <div className="build-container">
            <div className="icon">
              <FontAwesomeIcon icon={faHammer} />
            </div>

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
              work.{" "}
            </div>
          </div>

          <div className="performance-container">
            <div className="icon">
              <FontAwesomeIcon icon={faChartBar} />
            </div>
            <div className="mid-text-performance">
              See how you're performing
            </div>

            <div className="mid-text-performance-sub">
              With Statistics and Pulse you get valuable
              <br></br>
              insights into how your photos are performing
              <br></br>
              and how you rank in comparison to other
              <br></br>photographers in the community.
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="mid-signup-container">
          <div className="mid-signup-container-content">
            <div className="mid-signup-top-text">
              Join our photography community today
            </div>
            <div className="mid-signup-bottom-text">
              We want fresh, creative talent like you. Join our global network
              of like-minded creators to be inspired by incredible
            </div>
            <div className="mid-signup-last-text">
              photos daily, and get rewarded for your talents.
            </div>

            <div className="bottom-purp-signup-button">
              <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="left-footer">500px clone.</div>
        </div>
      </div>
    );

    const welcomeMessage = () => (
      <div>
        <div className="nav-container">
          <div className="splash-nav-header">
            <Link to="/">Aperture</Link>
          </div>
        </div>

        <div className="logout-button-container">
          <div className="upload-button-top">
            <Link to="/upload">Upload</Link>
          </div>

          <div>
            <button className="logout-button-top" onClick={this.props.logout}>
              Log Out
            </button>
          </div>
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

        <div>
          <div className="photo-feed">
            <div className="photo">
              <InfiniteScroll
                dataLength={this.state.images.length} //This is important field to render the next data
                next={this.fetchNextPhoto}
                hasMore={true}
                loader={<h4>Loading...</h4>}
              >
                {photo}
              </InfiniteScroll>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="left-footer">500px clone.</div>
        </div>
      </div>
    );

    //   return currentUser ? welcomeMessage() : sessionLinks();
    // };

    return this.props.currentUser ? welcomeMessage() : sessionLinks();
  }
}

export default SplashPage;





