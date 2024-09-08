import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './styles/index.css';
import Loading from './components/loading';
import TimelineComponent from './components/timelineComponent';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return loading ? <Loading /> : <TimelineComponent />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
