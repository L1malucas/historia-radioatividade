import React, { useState } from "react";
import "../index.css";

const timelineData = [
  {
    year: "1896",
    icon: "🔬",
    title: "Descoberta da Radioatividade",
    shortDescription: "Henri Becquerel descobre a radioatividade.",
    longDescription:
      "Henri Becquerel descobre que certos materiais, como o urânio, emitem radiação espontaneamente, sem a necessidade de uma fonte de energia externa. Esta descoberta marcou o início do estudo da radioatividade.",
  },
  {
    year: "1898",
    icon: "👩‍🔬",
    title: "Marie e Pierre Curie",
    shortDescription: "Descoberta do Polônio e do Rádio.",
    longDescription:
      "Marie e Pierre Curie descobriram dois novos elementos: o polônio e o rádio. Seus estudos aprofundaram o entendimento sobre a radioatividade e levaram ao desenvolvimento do conceito de elementos radioativos.",
  },
  {
    year: "1903",
    icon: "🏆",
    title: "Prêmio Nobel de Física",
    shortDescription: "Prêmio Nobel para Becquerel e os Curie.",
    longDescription:
      "Henri Becquerel e os Curie receberam o Prêmio Nobel de Física em 1903 por suas contribuições à descoberta da radioatividade, reconhecendo a importância fundamental dessa nova área da ciência.",
  },
  {
    year: "1934",
    icon: "⚛️",
    title: "Descoberta da Radioatividade Artificial",
    shortDescription: "Irène Joliot-Curie e Frédéric Joliot-Curie.",
    longDescription:
      "Irène e Frédéric Joliot-Curie descobriram a radioatividade artificial ao criar elementos radioativos a partir de reações nucleares. Essa descoberta abriu novas possibilidades para a medicina e a física.",
  },
  {
    year: "1942",
    icon: "💥",
    title: "Primeiro Reator Nuclear",
    shortDescription: "Primeira reação nuclear controlada.",
    longDescription:
      "Enrico Fermi e sua equipe construíram o primeiro reator nuclear na Universidade de Chicago, conseguindo a primeira reação nuclear controlada da história. Este foi um marco para o desenvolvimento da energia nuclear.",
  },
  {
    year: "1986",
    icon: "☢️",
    title: "Acidente de Chernobyl",
    shortDescription: "Maior desastre nuclear da história.",
    longDescription:
      "O reator nuclear de Chernobyl, na Ucrânia, explodiu, liberando uma grande quantidade de radiação na atmosfera. O desastre teve consequências graves para a saúde humana e o meio ambiente, além de moldar a opinião pública sobre a energia nuclear.",
  },
];

const ITEMS_PER_PAGE = 3; // Exibir três itens por página

const TimelineComponent = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Função para dividir os itens por páginas
  const paginatedData = timelineData.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    if ((currentPage + 1) * ITEMS_PER_PAGE < timelineData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="timeline-container">
      <h2>Linha do Tempo da Radioatividade</h2>
      <p className="subtitle">1934 - 2000</p>

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
            {activeItem === index && (
              <div className="timeline-popup">
                <h3>{item.title}</h3>
                <p>{item.longDescription}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <div className="pagination-controls">
        {currentPage > 0 && (
          <button className="pagination-button" onClick={handlePreviousPage}>
            Próxima
          </button>
        )}
        {currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE <
          timelineData.length && (
          <button className="pagination-button" onClick={handleNextPage}>
            Voltar
          </button>
        )}
      </div>
    </div>
  );
};

export default TimelineComponent;
