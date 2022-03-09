import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({selectedCountry}) => {
  return (
    <ComposableMap projection="geoEqualEarth">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#DDD"
              stroke="#FFF"
            />
          ))
        }
      </Geographies>
      <Marker coordinates={[selectedCountry.longitude, selectedCountry.latitude]}>
        <circle r={8} fill="#F53" />
      </Marker>
    </ComposableMap>
  );
};

export default MapChart;
