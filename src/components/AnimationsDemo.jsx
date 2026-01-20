// src/components/AnimationsDemo.jsx
import { useState } from "react";

function AnimationsDemo() {
  const [active, setActive] = useState(false);
  const [showCode, setShowCode] = useState(false);

  return (
    <section className="card">
      <button className="code-btn" onClick={() => setShowCode(!showCode)}>
        {"</>"}
      </button>

      <h2>Animaciones adicionales</h2>

      <button onClick={() => setActive(!active)}>Animar</button>

      <div
        style={{
          width: 100,
          height: 100,
          marginTop: "1rem",
          background: "#61dafb",
          transition: "all 0.6s ease",
          transform: active ? "rotate(180deg) scale(1.2)" : "rotate(0)",
          borderRadius: active ? "50%" : "10px",
        }}
      />

      {showCode && (
        <pre className="code">{`transition: "all 0.6s ease"`}</pre>
      )}
    </section>
  );
}

export default AnimationsDemo;
