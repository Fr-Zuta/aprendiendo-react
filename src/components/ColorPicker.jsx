// src/components/ColorPicker.jsx
import { useState } from "react";

const colors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#3f51b5",
  "#2196f3",
  "#4caf50",
  "#ff9800",
];

function ColorPicker() {
  const [color, setColor] = useState(colors[0]);
  const [showCode, setShowCode] = useState(false);

  return (
    <section className="card">
      <button className="code-btn" onClick={() => setShowCode(!showCode)}>
        {"</>"}
      </button>

      <h2>Selector de color</h2>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        {colors.map((c) => (
          <div
            key={c}
            onClick={() => setColor(c)}
            style={{
              width: 30,
              height: 30,
              background: c,
              borderRadius: "50%",
              cursor: "pointer",
              border: c === color ? "3px solid #000" : "2px solid #fff",
              transition: "transform 0.3s",
            }}
          />
        ))}
      </div>

      <div
        style={{
          marginTop: "1rem",
          height: "80px",
          background: color,
          transition: "background 0.4s ease",
        }}
      />

      {showCode && (
        <pre className="code">{`const [color, setColor] = useState();`}</pre>
      )}
    </section>
  );
}

export default ColorPicker;
