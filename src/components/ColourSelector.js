import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background } = config;
  return (
    <button className="color-selector" onClick={() => selectNextBackground({background: background})}>
      {"Select Color"}
    </button>
  )
}
export default ColourSelector;
