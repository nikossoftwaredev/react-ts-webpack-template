import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button type='button' onClick={() => setCounter(prev => prev - 1)}>
        -
      </button>
      {counter}
      <button type='button' onClick={() => setCounter(prev => prev + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
