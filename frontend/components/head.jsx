import React, { Component } from 'react';
import { Helmet } from 'react-helmet';



class App extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Aperture</title>
                    <meta name="description" content="" />
                    <meta name="image" property="og:image" content="app/assets/images/ss.png"></meta>
                </Helmet>
                {/* ... */}
            </div>
        );
    }
}

export default App;