import React from "react";
import "./styles.css";

const PeriodicTable = () => {
  return (
    <section>
      <div className="periodic-table">
        {/* Hidrogênio */}
        <div
          className="element gas"
          style={{ gridColumn: 1, gridRow: 1 }}
          data-group="nonmetal"
        >
          <div className="atomic-number">1</div>
          <div className="symbol">H</div>
          <div className="name">Hidrogênio</div>
          <div className="atomic-weight">1,008</div>
        </div>

        {/* Hélio */}
        <div
          className="element gas"
          style={{ gridColumn: 18, gridRow: 1 }}
          data-group="noble-gas"
        >
          <div className="atomic-number">2</div>
          <div className="symbol">He</div>
          <div className="name">Hélio</div>
          <div className="atomic-weight">4,0026</div>
        </div>

        {/* Outros elementos podem ser adicionados aqui */}
      </div>
    </section>
  );
};

export default PeriodicTable;
