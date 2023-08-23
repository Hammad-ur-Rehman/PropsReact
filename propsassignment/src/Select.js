import React from 'react';

const Select = ({ label, value, onChange, optionsList }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {optionsList.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
