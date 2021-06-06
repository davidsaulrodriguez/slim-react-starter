import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 className='center-header'>Slim React Starter</h1>
      <h3 className='center-header'>Version 1.0.0</h3>
      <hr />
      <h2 className='center'>Counter</h2>
      <p className='center'>{counter}</p>
      <div className='btn-container'>
        <button
          className='center-btn'
          onClick={() => setCounter((counter) => counter + 1)}>
          Incrememnt
        </button>
        <button
          className='center-btn'
          onClick={() => setCounter((counter) => counter - 1)}>
          Decrememnt
        </button>
      </div>
    </>
  );
};

export default App;
