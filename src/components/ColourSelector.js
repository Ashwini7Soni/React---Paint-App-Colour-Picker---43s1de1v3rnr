import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background } = config;
  return (
    <button className={props.config.classname} onClick={() => selectNextBackground({background: background})}>
      {"Select Color"}
    </button>
  )
}
export default ColourSelector;
