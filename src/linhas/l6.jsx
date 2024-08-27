import React from "react";
import "../index.css";

const PeriodicTableRow6 = () => {
  return (
    <div className="periodic-table">
      {/* Césio */}
      <div
        className="element solid"
        style={{ gridColumn: 1, gridRow: 6 }}
        data-group="alkali-metal"
      >
        <div className="atomic-number">55</div>
        <div className="symbol">Cs</div>
        <div className="name">Césio</div>
        <div className="atomic-weight">132,91</div>
      </div>

      {/* Bário */}
      <div
        className="element solid"
        style={{ gridColumn: 2, gridRow: 6 }}
        data-group="alkaline-earth-metal"
      >
        <div className="atomic-number">56</div>
        <div className="symbol">Ba</div>
        <div className="name">Bário</div>
        <div className="atomic-weight">137,33</div>
      </div>

      {/* Lantanídeos placeholder */}
      <div
        className="element placeholder"
        style={{ gridColumn: "3 / span 15", gridRow: 6 }}
      >
        <div className="range">57–71</div>
      </div>

      {/* Háfnio */}
      <div
        className="element solid"
        style={{ gridColumn: 4, gridRow: 6 }}
        data-group="transition-metal"
      >
        <div className="atomic-number">72</div>
        <div className="symbol">Hf</div>
        <div className="name">Háfnio</div>
        <div className="atomic-weight">178,49</div>
      </div>

      {/* Tântalo */}
      <div
        className="element solid"
        style={{ gridColumn: 5, gridRow: 6 }}
        data-group="transition-metal"
      >
        <div className="atomic-number">73</div>
        <div className="symbol">Ta</div>
        <div className="name">Tântalo</div>
        <div className="atomic-weight">180,95</div>
      </div>

      {/* Tungstênio */}
      <div
        className="element solid"
        style={{ gridColumn: 6, gridRow: 6 }}
        data-group="transition-metal"
      >
        <div className="atomic-number">74</div>
        <div className="symbol">W</div>
        <div className="name">Tungstênio</div>
        <div className="atomic-weight">183,84</div>
      </div>

      {/* Rênio */}
      <div
        className="element solid"
        style={{ gridColumn: 7, gridRow: 6 }}
        data-group="transition-metal"
      >
        <div className="atomic-number">75</div>
        <div className="symbol">Re</div>
        <div className="name">Rênio</div>
        <div className="atomic-weight">186,21</div>
      </div>

      {/* Ósmio */}
      <div
        className="element solid"
        style={{ gridColumn: 8, gridRow: 6 }}
        data-group="transition-metal"
      >
        <div className="atomic-number">76</div>
        <div className="symbol">Os</div>
        <div className="name">Ósmio</div>
        <div className="atomic-weight">190,23</div>
      </div>

      {/* Irídio */}
      <div
        className="element solid"
        style={{ gridColumn: 9, gridRow: 6 }}
        data-group="transition-metal"
      >
        <div className="atomic-number">77</div>
        <div className="symbol">Ir</div>
        <div className="name">Irídio</div>
        <div className="atomic-weight">192,22</div>
      </div>

      {/* Platina */}
      <div
        className="element solid"
        style={{ gridColumn: 10, gridRow: 6 }}
        data-group="transition-metal"
      >
        <div className="atomic-number">78</div>
        <div className="symbol">Pt</div>
        <div className="name">Platina</div>
        <div className="atomic-weight">195,08</div>
      </div>

      {/* Ouro */}
      <div
        className="element solid"
        style={{ gridColumn: 11, gridRow: 6 }}
        data-group="transition-metal"
      >
        <div className="atomic-number">79</div>
        <div className="symbol">Au</div>
        <div className="name">Ouro</div>
        <div className="atomic-weight">196,97</div>
      </div>

      {/* Mercúrio */}
      <div
        className="element liquid"
        style={{ gridColumn: 12, gridRow: 6 }}
        data-group="post-transition-metal"
      >
        <div className="atomic-number">80</div>
        <div className="symbol">Hg</div>
        <div className="name">Mercúrio</div>
        <div className="atomic-weight">200,59</div>
      </div>

      {/* Tálio */}
      <div
        className="element solid"
        style={{ gridColumn: 13, gridRow: 6 }}
        data-group="post-transition-metal"
      >
        <div className="atomic-number">81</div>
        <div className="symbol">Tl</div>
        <div className="name">Tálio</div>
        <div className="atomic-weight">204,38</div>
      </div>

      {/* Chumbo */}
      <div
        className="element solid"
        style={{ gridColumn: 14, gridRow: 6 }}
        data-group="post-transition-metal"
      >
        <div className="atomic-number">82</div>
        <div className="symbol">Pb</div>
        <div className="name">Chumbo</div>
        <div className="atomic-weight">207,2</div>
      </div>

      {/* Bismuto */}
      <div
        className="element solid"
        style={{ gridColumn: 15, gridRow: 6 }}
        data-group="post-transition-metal"
      >
        <div className="atomic-number">83</div>
        <div className="symbol">Bi</div>
        <div className="name">Bismuto</div>
        <div className="atomic-weight">208,98</div>
      </div>

      {/* Polônio */}
      <div
        className="element solid"
        style={{ gridColumn: 16, gridRow: 6 }}
        data-group="post-transition-metal"
      >
        <div className="atomic-number">84</div>
        <div className="symbol">Po</div>
        <div className="name">Polônio</div>
        <div className="atomic-weight">(209)</div>
      </div>

      {/* Astato */}
      <div
        className="element solid"
        style={{ gridColumn: 17, gridRow: 6 }}
        data-group="metalloid"
      >
        <div className="atomic-number">85</div>
        <div className="symbol">At</div>
        <div className="name">Astato</div>
        <div className="atomic-weight">(210)</div>
      </div>

      {/* Radônio */}
      <div
        className="element gas"
        style={{ gridColumn: 18, gridRow: 6 }}
        data-group="noble-gas"
      >
        <div className="atomic-number">86</div>
        <div className="symbol">Rn</div>
        <div className="name">Radônio</div>
        <div className="atomic-weight">(222)</div>
      </div>
    </div>
  );
};

export default PeriodicTableRow6;
