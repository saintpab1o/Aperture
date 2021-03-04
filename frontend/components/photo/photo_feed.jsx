import React from 'react';
import PhotoIndexItem from './photo_index_item';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';


class PhotoFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images : [],
            count: 1,
            start: 1,
        }
    }
    

    render() { 
        const photo = this.props.photos.map(photo => (
            <PhotoIndexItem key={photo.id} photo={photo} />
        ));
        
        return (
          <div>
            <div className="photo-feed">
              <div className="photo">
                <InfiniteScroll
                  dataLength={items.length} //This is important field to render the next data
                  next={fetchData}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
                  endMessage={
                    <p style={{ textAlign: "center" }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                  // below props only if you need pull down functionality
                  refreshFunction={this.refresh}
                  pullDownToRefresh
                  pullDownToRefreshThreshold={20}
                  pullDownToRefreshContent={
                    <h3 style={{ textAlign: "center" }}>
                      &#8595; Pull down to refresh
                    </h3>
                  }
                  releaseToRefreshContent={
                    <h3 style={{ textAlign: "center" }}>
                      &#8593; Release to refresh
                    </h3>
                  }
                >
                  {items}
                </InfiniteScroll>
              </div>
            </div>
          </div>
        );
    }
}

export default PhotoFeed;