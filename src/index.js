import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    // <h1 className="container text-center">React Prototypes!</h1>,
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);
