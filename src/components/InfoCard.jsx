// src/components/InfoCard.jsx
import { useState } from "react";

function InfoCard({ title, description, level }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <section className="card info-card">
      <button className="code-btn" onClick={() => setShowCode(!showCode)}>
        {"</>"}
      </button>

      <h2>{title}</h2>
      <p>{description}</p>

      <span className={`badge level-${level.toLowerCase()}`}>
        Nivel: {level}
      </span>

      {showCode && (
        <pre className="code">{`
function InfoCard({ title, description, level }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>Nivel: {level}</span>
    </>
  );
}
        `}</pre>
      )}
    </section>
  );
}

export default InfoCard;
