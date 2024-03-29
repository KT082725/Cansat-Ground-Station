import React from 'react';

const BaudSelector = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value={9600}>9600</option>
      <option value={19200}>19200</option>
      <option value={38400}>38400</option>
      <option value={57600}>57600</option>
      <option value={115200}>115200</option>
    </select>
  );
};

export default BaudSelector;
