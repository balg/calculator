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
    <button onClick={() => handleOperatorKey('/')}>/</button>

    <button onClick={() => handleNumberKey('7')}>7</button>
    <button onClick={() => handleNumberKey('8')}>8</button>
    <button onClick={() => handleNumberKey('9')}>9</button>
    <button onClick={() => handleOperatorKey('*')}>*</button>

    <button onClick={() => handleNumberKey('4')}>4</button>
    <button onClick={() => handleNumberKey('5')}>5</button>
    <button onClick={() => handleNumberKey('6')}>6</button>
    <button onClick={() => handleOperatorKey('-')}>-</button>

    <button onClick={() => handleNumberKey('1')}>1</button>
    <button onClick={() => handleNumberKey('2')}>2</button>
    <button onClick={() => handleNumberKey('3')}>3</button>
    <button onClick={() => handleOperatorKey('+')}>+</button>

    <button className="zero" onClick={() => handleNumberKey('0')}>0</button>
    <button disabled={!decimalEnabled} onClick={() => handleNumberKey('.')}>.</button>
    <button onClick={() => handleOperatorKey('=')}>=</button>
  </div>
);

export default Keypad;
