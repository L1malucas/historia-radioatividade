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


const TimelineComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="timeline-container">
      <h2>Linha do Tempo de Informações</h2>
      <p>Coloque aqui o subtítulo</p>
      <div className="timeline">
        {timelineData.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon" onClick={() => handleToggle(index)}>
              {event.icon}
            </div>
            <div
              className={`timeline-year ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {event.year}
            </div>
            <div className="timeline-short-description">
              {event.shortDescription}
            </div>
            {activeIndex === index && (
              <div className="timeline-details">
                <h3>{event.title}</h3>
                <p>{event.longDescription}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineComponent;