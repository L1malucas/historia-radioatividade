import React, { useState, useEffect, useRef } from "react";
import "../index.css";

import { world, Brasil } from "../data.js";
const ITEMS_PER_PAGE = 4;

const TimelineComponent = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeTab, setActiveTab] = useState("world");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dataToDisplay = activeTab === "world" ? world : Brasil;
  const popupRef = useRef(null);

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

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setActiveItem(null);
    }
  };

  const handleItemClick = (index) => {
    setActiveItem(activeItem === index ? null : index);
    if (window.innerWidth <= 412) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveItem(null);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const totalItems = dataToDisplay.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return (
    <div className="timeline-container">
      <h2>Marcos na História da Radiotividade</h2>
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
              onClick={() => handleItemClick(index)}
            >
              {item.icon}
            </div>
            <div className="timeline-content">
              <br />
              <p className="timeline-year">{item.year}</p>
              <p className="timeline-title">{item.title}</p>
            </div>
            <div
              ref={activeItem === index ? popupRef : null}
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

      {/* Modal for mobile devices */}
      {isModalOpen && activeItem !== null && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <h3>{paginatedData[activeItem].title}</h3>
            <p>{paginatedData[activeItem].longDescription}</p>
          </div>
        </div>
      )}

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
