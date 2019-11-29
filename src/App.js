import React, { useState } from 'react';
import axios from 'axios';
import Keypad from './components/Keypad/Keypad';
import Display from './components/Display/Display';
import './App.css';

function App() {
  const [subTotal, setSubTotal] = useState(0);
  const [operand, setOperand] = useState('');
  const [operator, setOperator] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClear = () => {
    setSubTotal(0);
    setOperand('');
    setOperator('');
  }

  const handleNumberKey = (event) => {
    const value = event.target.name;
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

  const handleOperatorKey = (event) => {
    const operatorKey = event.target.name;
    try {
      if (operand) {
        updateSubtotal();
      }
      setOperator(operatorKey === '=' ? '' : operatorKey);
      setOperand('');
    } catch (e) {
      window.alert(`No, no: ${e.message}`);
      handleClear();
    }
  };

  const updateSubtotal = () => {
    let newSubTotal;
    if (!operator) {
      // This is the first operation in the chain
      newSubTotal = parseFloat(operand || 0);
    } else {
      // eslint-disable-next-line no-eval
      if (operator === '/' && operand === '0') throw new Error('Division by zero.');
      newSubTotal = eval(`${subTotal.toString(10)} ${operator} ${operand}`);
    }
    setSubTotal(newSubTotal);
  }

  const handleMemoryRead = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_CALCULATOR_SERVICE_ENDPOINT}/memory`
      );
      if (data !== null) {
        setOperand(data.toString());
      }
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  const handleMemoryStore = async () => {
    try {
      setIsLoading(true);
      const number = operand || subTotal;
      await axios.put(
        `${process.env.REACT_APP_CALCULATOR_SERVICE_ENDPOINT}/memory/${number}`
      );
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      <Display value={operand || subTotal.toString(10)} />
      <Keypad
        handleNumberKey={handleNumberKey}
        handleOperatorKey={handleOperatorKey}
        handleClear={handleClear}
        handleMemoryRead={handleMemoryRead}
        handleMemoryStore={handleMemoryStore}
        decimalEnabled={!operand.includes('.')}
      />
    </div>
  );
}

export default App;
