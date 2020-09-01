import React, { Component } from 'react';
import { Helmet } from 'react-helmet';



class App extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Turbo Todo</title>
                    <meta name="description" content="Todos!" />
                    <meta name="theme-color" content="app/assets/images/ss.png" />
                </Helmet>
                {/* ... */}
            </div>
        );
    }
}

export default App;