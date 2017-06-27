import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
