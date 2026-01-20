// src/components/Counter.jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [showCode, setShowCode] = useState(false);

  return (
    <section className="card">
      <button className="code-btn" onClick={() => setShowCode(!showCode)}>
        {"</>"}
      </button>

      <h2>Contador con estado</h2>
      <p style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{count}</p>

      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button
          className="reset-btn"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>

      {showCode && (
        <pre className="code">{`const [count, setCount] = useState(0);`}</pre>
      )}
    </section>
  );
}

export default Counter;
