import React from 'react';
import './Keypad.css';

const Keypad = ({ handleNumberKey, handleClear }) => (
  <div className="keypad">
    <button onClick={handleClear}>C</button>
    <button>M</button>
    <button>MR</button>
    <button>/</button>

    <button onClick={() => handleNumberKey('7')}>7</button>
    <button onClick={() => handleNumberKey('8')}>8</button>
    <button onClick={() => handleNumberKey('9')}>9</button>
    <button>*</button>

    <button onClick={() => handleNumberKey('4')}>4</button>
    <button onClick={() => handleNumberKey('5')}>5</button>
    <button onClick={() => handleNumberKey('6')}>6</button>
    <button>-</button>

    <button onClick={() => handleNumberKey('1')}>1</button>
    <button onClick={() => handleNumberKey('2')}>2</button>
    <button onClick={() => handleNumberKey('3')}>3</button>
    <button>+</button>

    <button className="zero" onClick={() => handleNumberKey('0')}>0</button>
    <button onClick={() => handleNumberKey('.')}>.</button>
    <button>=</button>
  </div>
);

export default Keypad;
