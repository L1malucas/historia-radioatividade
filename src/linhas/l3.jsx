import React from "react";
import "../index.css";

const PeriodicTableRow3 = () => {
  return (
    <div className="periodic-table">
      {/* Sódio */}
      <div
        className="element solid"
        style={{ gridColumn: 1, gridRow: 3 }}
        data-group="alkali-metal"
      >
        <div className="atomic-number">11</div>
        <div className="symbol">Na</div>
        <div className="name">Sódio</div>
        <div className="atomic-weight">22,990</div>
      </div>

      {/* Magnésio */}
      <div
        className="element solid"
        style={{ gridColumn: 2, gridRow: 3 }}
        data-group="alkaline-earth-metal"
      >
        <div className="atomic-number">12</div>
        <div className="symbol">Mg</div>
        <div className="name">Magnésio</div>
        <div className="atomic-weight">24,305</div>
      </div>

      {/* Alumínio */}
      <div
        className="element solid"
        style={{ gridColumn: 13, gridRow: 3 }}
        data-group="post-transition-metal"
      >
        <div className="atomic-number">13</div>
        <div className="symbol">Al</div>
        <div className="name">Alumínio</div>
        <div className="atomic-weight">26,982</div>
      </div>

      {/* Silício */}
      <div
        className="element solid"
        style={{ gridColumn: 14, gridRow: 3 }}
        data-group="metalloid"
      >
        <div className="atomic-number">14</div>
        <div className="symbol">Si</div>
        <div className="name">Silício</div>
        <div className="atomic-weight">28,085</div>
      </div>

      {/* Fósforo */}
      <div
        className="element solid"
        style={{ gridColumn: 15, gridRow: 3 }}
        data-group="nonmetal"
      >
        <div className="atomic-number">15</div>
        <div className="symbol">P</div>
        <div className="name">Fósforo</div>
        <div className="atomic-weight">30,974</div>
      </div>

      {/* Enxofre */}
      <div
        className="element solid"
        style={{ gridColumn: 16, gridRow: 3 }}
        data-group="nonmetal"
      >
        <div className="atomic-number">16</div>
        <div className="symbol">S</div>
        <div className="name">Enxofre</div>
        <div className="atomic-weight">32,06</div>
      </div>

      {/* Cloro */}
      <div
        className="element gas"
        style={{ gridColumn: 17, gridRow: 3 }}
        data-group="halogen"
      >
        <div className="atomic-number">17</div>
        <div className="symbol">Cl</div>
        <div className="name">Cloro</div>
        <div className="atomic-weight">35,45</div>
      </div>

      {/* Argônio */}
      <div
        className="element gas"
        style={{ gridColumn: 18, gridRow: 3 }}
        data-group="noble-gas"
      >
        <div className="atomic-number">18</div>
        <div className="symbol">Ar</div>
        <div className="name">Argônio</div>
        <div className="atomic-weight">39,948</div>
      </div>
    </div>
  );
};

export default PeriodicTableRow3;
