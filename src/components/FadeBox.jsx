// src/components/FadeBox.jsx
import { useState } from "react";
import "../styles/FadeBox.css";

function FadeBox() {
  const [visible, setVisible] = useState(true);

  return (
    <section className="card">
      <h2>Animaciones básicas</h2>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      <div className={`box ${visible ? "show" : "hide"}`} />
    </section>
  );
}

export default FadeBox;
