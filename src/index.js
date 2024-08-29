import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TimelineComponent from './linhas/tabela';
import Loading from './linhas/loading';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando um carregamento de dados
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 segundos de loading
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
