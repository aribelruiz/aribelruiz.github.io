import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Imports for  Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { faEnvelope, faFile, faLaptopCode, faSquareCheck, faCircleCheck, faFileCode, faArrowCircleRight, faArrowUp, faDesktop } from '@fortawesome/free-solid-svg-icons';

// Adding icons to global library
library.add(fab, faEnvelope, faFile, faLaptopCode, faSquareCheck, faCircleCheck, faFileCode, faArrowCircleRight, faArrowUp,faDesktop);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
