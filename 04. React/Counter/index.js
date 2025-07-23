// https://onecompiler.com/react/43rhd27e6
import React from 'react';
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
    );
}

export default App;
