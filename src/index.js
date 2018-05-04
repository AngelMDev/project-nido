import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Sidebar from './Sidebar.jsx'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>,<Sidebar /><App/></div>, document.getElementById('root'));
registerServiceWorker();
