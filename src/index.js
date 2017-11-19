import React from 'react';
import ReactDOM from 'react-dom';
import './app/App';
import App from './app/App';
import registerServiceWorker from './app/registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
