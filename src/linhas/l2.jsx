import React from "react";
import "../index.css";

const PeriodicTableRow2 = () => {
  return (
    <div className="periodic-table">
      {/* Lítio */}
      <div
        className="element solid"
        style={{ gridColumn: 1, gridRow: 2 }}
        data-group="alkali-metal"
      >
        <div className="atomic-number">3</div>
        <div className="symbol">Li</div>
        <div className="name">Lítio</div>
        <div className="atomic-weight">6,94</div>
      </div>

      {/* Berílio */}
      <div
        className="element solid"
        style={{ gridColumn: 2, gridRow: 2 }}
        data-group="alkaline-earth-metal"
      >
        <div className="atomic-number">4</div>
        <div className="symbol">Be</div>
        <div className="name">Berílio</div>
        <div className="atomic-weight">9,0122</div>
      </div>

      {/* Boro */}
      <div
        className="element solid"
        style={{ gridColumn: 13, gridRow: 2 }}
        data-group="metalloid"
      >
        <div className="atomic-number">5</div>
        <div className="symbol">B</div>
        <div className="name">Boro</div>
        <div className="atomic-weight">10,81</div>
      </div>

      {/* Carbono */}
      <div
        className="element solid"
        style={{ gridColumn: 14, gridRow: 2 }}
        data-group="nonmetal"
      >
        <div className="atomic-number">6</div>
        <div className="symbol">C</div>
        <div className="name">Carbono</div>
        <div className="atomic-weight">12,011</div>
      </div>

      {/* Nitrogênio */}
      <div
        className="element gas"
        style={{ gridColumn: 15, gridRow: 2 }}
        data-group="nonmetal"
      >
        <div className="atomic-number">7</div>
        <div className="symbol">N</div>
        <div className="name">Nitrogênio</div>
        <div className="atomic-weight">14,007</div>
      </div>

      {/* Oxigênio */}
      <div
        className="element gas"
        style={{ gridColumn: 16, gridRow: 2 }}
        data-group="nonmetal"
      >
        <div className="atomic-number">8</div>
        <div className="symbol">O</div>
        <div className="name">Oxigênio</div>
        <div className="atomic-weight">15,999</div>
      </div>

      {/* Flúor */}
      <div
        className="element gas"
        style={{ gridColumn: 17, gridRow: 2 }}
        data-group="halogen"
      >
        <div className="atomic-number">9</div>
        <div className="symbol">F</div>
        <div className="name">Flúor</div>
        <div className="atomic-weight">18,998</div>
      </div>

      {/* Neônio */}
      <div
        className="element gas"
        style={{ gridColumn: 18, gridRow: 2 }}
        data-group="noble-gas"
      >
        <div className="atomic-number">10</div>
        <div className="symbol">Ne</div>
        <div className="name">Neônio</div>
        <div className="atomic-weight">20,180</div>
      </div>
    </div>
  );
};

export default PeriodicTableRow2;
