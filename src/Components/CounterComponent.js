// CounterComponent.js

import React, { useState } from 'react';
import './CounterComponent.css';

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counter-container">
      <div className="counter-value">Counter Value: {counter}</div>
      <button className="counter-button" onClick={handleIncrement}>
        Increment
      </button>
      <button className="counter-button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default CounterComponent;
