import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';
import './styles/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
