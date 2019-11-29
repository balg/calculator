import React from 'react';
import './Keypad.css';

const Keypad = ({
  handleNumberKey,
  handleOperatorKey,
  handleClear,
  handleMemoryStore,
  handleMemoryRead,
  decimalEnabled,
}) => (
  <div className="keypad">
    <button onClick={handleClear}>C</button>
    <button onClick={handleMemoryStore}>M</button>
    <button onClick={handleMemoryRead}>MR</button>
    <button name='/' onClick={handleOperatorKey}>/</button>

    <button name='7' onClick={handleNumberKey}>7</button>
    <button name='8' onClick={handleNumberKey}>8</button>
    <button name='9' onClick={handleNumberKey}>9</button>
    <button name='*' onClick={handleOperatorKey}>*</button>

    <button name='4' onClick={handleNumberKey}>4</button>
    <button name='5' onClick={handleNumberKey}>5</button>
    <button name='6' onClick={handleNumberKey}>6</button>
    <button name='-' onClick={handleOperatorKey}>-</button>

    <button name='1' onClick={handleNumberKey}>1</button>
    <button name='2' onClick={handleNumberKey}>2</button>
    <button name='3' onClick={handleNumberKey}>3</button>
    <button name='+' onClick={handleOperatorKey}>+</button>

    <button name='0' className="zero" onClick={handleNumberKey}>0</button>
    <button name='.' disabled={!decimalEnabled} onClick={handleNumberKey}>.</button>
    <button name='=' onClick={handleOperatorKey}>=</button>
  </div>
);

export default Keypad;
