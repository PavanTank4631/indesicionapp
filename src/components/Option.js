import React from 'react';

const Option = (props) => (
  <div className="option">
  <div className="option-text">{props.count}. {props.optionText}</div>
    <button className="button button-link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
  </button>
  </div>
);

export default Option;
