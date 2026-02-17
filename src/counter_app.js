import React, { useState } from 'react';
import "./counter_app.css";

function CounterApp() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="counter-app">
            <h1>Counter App</h1>
            <p className="count">{count}</p>
            <div className="buttons">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default CounterApp;