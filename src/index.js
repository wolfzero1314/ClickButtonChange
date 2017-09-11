import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ButtonApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ButtonApp />, document.getElementById('root'));
registerServiceWorker();
