import "./App.css";

//Note: please, do dot change placeholder and data-testid attributes

function App() {
  return (
    <div className="app">
      <h1>Fibonacci 🌀</h1>
      <input type="number" placeholder="Insert a number" />
      <button>Calculate</button>
      <div className="result" data-testid="result"></div>
    </div>
  );
}

export default App;
