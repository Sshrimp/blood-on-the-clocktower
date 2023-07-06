import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './mock';
// import Loading from './baseUI/loading';

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
)
