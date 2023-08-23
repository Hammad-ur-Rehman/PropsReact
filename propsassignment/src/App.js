import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Select from './Select';
import Table from './Table';
import Card from './Card';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = event => {
    setSelectValue(event.target.value);
  };


  return (
    <div className="App">
      <Input value={inputValue} onChange={handleInputChange} type="text" />
      <Button label="Click me" onClick={() => console.log('Button clicked')} />
      <Select
        label="Select an option"
        value={selectValue}
        onChange={handleSelectChange}
        optionsList={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
      />
      <Table data={ "Data" } />
      <Card
        id={1 }
        userName={"Hammad"}
        age={24}
        institute={"Sir Syed"}
        isActive={"NO"}
        category={"A"}
      />
    </div>
  );
};

export default App;
