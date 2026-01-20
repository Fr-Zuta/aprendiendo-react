// src/components/ToggleTheme.jsx
import { useState } from "react";
import "../styles/ToggleTheme.css";

function ToggleTheme() {
  const [dark, setDark] = useState(false);

  return (
    <section className={`card theme ${dark ? "dark" : ""}`}>
      <h2>Renderizado condicional</h2>
      <p>Tema actual: {dark ? "Oscuro" : "Claro"}</p>
      <button onClick={() => setDark(!dark)}>Cambiar tema</button>
    </section>
  );
}

export default ToggleTheme;
