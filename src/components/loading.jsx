import React from "react";

import "../styles/index.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-animation">
        <div className="chemical-item">⚗️</div>
        <div className="chemical-item">⚛️</div>
        <div className="chemical-item">🧪</div>
        <div className="chemical-item">🧬</div>
      </div>
      <p>Carregando...</p>
    </div>
  );
};

export default Loading;
