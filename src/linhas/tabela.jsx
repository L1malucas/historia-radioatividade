import React, { useState } from "react";
import "../index.css";

import { world, Brasil } from "../data.js";
const ITEMS_PER_PAGE = 4;

const TimelineComponent = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeTab, setActiveTab] = useState("world");

  const dataToDisplay = activeTab === "world" ? world : Brasil;

  const paginatedData = dataToDisplay.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    if ((currentPage + 1) * ITEMS_PER_PAGE < dataToDisplay.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  const totalItems = dataToDisplay.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return (
    <div className="timeline-container">
      <h2>Linha do Tempo da Radiotividade</h2>
      <br />
      {/* Abas de navegação */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "world" ? "active" : ""}`}
          onClick={() => handleTabChange("world")}
        >
          Mundo
        </button>
        <button
          className={`tab ${activeTab === "Brasil" ? "active" : ""}`}
          onClick={() => handleTabChange("Brasil")}
        >
          Brasil
        </button>
      </div>
      <p className="subtitle">
        {activeTab === "world" ? "1896 - 2011" : "1934 - 2021"}
      </p>

      <div className="timeline">
        <div className="timeline-line"></div>

        {paginatedData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div
              className="timeline-icon"
              onClick={() => setActiveItem(activeItem === index ? null : index)}
            >
              {item.icon}
            </div>
            <div className="timeline-content">
              <br />
              <p className="timeline-year">{item.year}</p>
              <p className="timeline-title">{item.title}</p>
            </div>
            <div
              className={`timeline-popup ${
                activeItem === index ? "active" : ""
              }`}
            >
              <h3>{item.title}</h3>
              <p>{item.longDescription}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <div className="pagination-controls">
        {currentPage > 0 && (
          <button className="pagination-button" onClick={handlePreviousPage}>
            Voltar
          </button>
        )}
        {currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE <
          dataToDisplay.length && (
          <button className="pagination-button" onClick={handleNextPage}>
            Próximo
          </button>
        )}
      </div>

      {/* Informações de paginação */}
      <div className="pagination-info">
        <p>
           {currentPage + 1} de {totalPages}
        </p>
        <p>Total de itens: {totalItems}</p>
      </div>
    </div>
  );
};

export default TimelineComponent;
