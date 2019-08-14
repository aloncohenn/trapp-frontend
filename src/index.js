import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faEdit,
  faPlus,
  faKey,
  faEnvelope,
  faUser,
  faBars,
  faTrashAlt,
  faSquare,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faKey,
  faEnvelope,
  faUser,
  faEdit,
  faPlus,
  faBars,
  faTrashAlt,
  faSquare,
  faCheckSquare
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
