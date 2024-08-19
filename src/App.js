import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const workerRef = () => useRef(null);

  useEffect(() => {
    return () => {
      if (workerRef.current instanceof Worker) {
        workerRef.current.terminate();
      }
    };
  }, []);

  const handleCalculate = () => {
    if (workerRef.current instanceof Worker) {
      workerRef.current.terminate();
    }

    workerRef.current = new Worker('worker.js');
    workerRef.current.onmessage = function (e) {
      setResult(`Result: ${e.data}`);
    };

    setResult('Calculating...');
    workerRef.current.postMessage({ data: parseInt(inputValue, 10) });
  };

  return (
    <div className="app">
      <h1>Fibonacci</h1>
      <input
        type="number"
        placeholder="Insert a number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div className="result" data-testid="result">{result}</div>
    </div>
  );
}

export default App;