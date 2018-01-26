import React from 'react';
import ReactDOM from 'react-dom';
import './app/App';
import App from './app/App';
import registerServiceWorker from './app/registerServiceWorker';

//STYLES
import './index.css';
import './components/styles/reset.style.css';
import './components/styles/global.style.css';

ReactDOM.render( <App/>, document.getElementById( 'root' ) );
registerServiceWorker();
