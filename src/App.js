import React, { useState } from 'react';
import Keypad from './components/Keypad/Keypad';
import Display from './components/Display/Display';
import './App.css';

function App() {
  const [operand, setOperand] = useState(null);

  const handleClear = () => {
    setOperand(null);
  }

  const handleNumberKey = (value) => {
    let newOperand = '';
    if (!operand && value === '.') {
      newOperand = '0.';
    } else if ((!operand || operand === '0') && value !== '.') {
      newOperand = value;
    } else {
      newOperand = `${operand || ''}${value}`;
    }
    setOperand(newOperand);
  };

  return (
    <div className="App">
      <Display value={operand || '0'} />
      <Keypad
        handleNumberKey={handleNumberKey}
        handleClear={handleClear}
      />
    </div>
  );
}

export default App;
