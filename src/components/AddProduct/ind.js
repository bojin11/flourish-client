import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => { 
    setSelectedOption
    console.log( {selectedOption} );
  }

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
}
