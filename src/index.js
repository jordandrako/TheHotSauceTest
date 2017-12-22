import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import injectGlobal from './theme/globalStyle'; // eslint-disable-line

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
