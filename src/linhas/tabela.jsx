import React from "react";
import "../index.css";
import PeriodicTableRow1 from "./l1";
import PeriodicTableRow2 from "./l2";
import PeriodicTableRow3 from "./l3";
import PeriodicTableRow4 from "./l4";
import PeriodicTableRow5 from "./l5";
import PeriodicTableRow6 from "./l6";
import PeriodicTableRow7 from "./l7";
import Actinides from "./actinideos";
import Lanthanides from "./lat";

const PeriodicTable = () => {
  return (
    <section>
      <div className="periodic-table-container">
        {/* Linha 1 */}
        <PeriodicTableRow1 />
        {/* Linha 2 */}
        <PeriodicTableRow2 />

        {/* Linha 3 */}
        <PeriodicTableRow3 />

        {/* Linha 4 */}
        <PeriodicTableRow4 />

        {/* Linha 5 */}
        <PeriodicTableRow5 />

        {/* Linha 6 */}
        <PeriodicTableRow6 />

        {/* Linha 7 */}
        <PeriodicTableRow7 />

        {/* Actinídeos */}
        <Actinides />

        {/* Lantanídeos */}
        <Lanthanides />
      </div>
    </section>
  );
};

export default PeriodicTable;
