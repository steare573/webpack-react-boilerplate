import React from 'react';

export default function InputTemplate(props) {
  return (
    <input
      type="text"
      value={props.inputText}
      onChange={(e) => { props.setInputText(e.target.value); }}
    />
  );
}

InputTemplate.propTypes = {
  inputText: React.PropTypes.string,
  setInputText: React.PropTypes.func,
};
