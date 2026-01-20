// src/App.js
import { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
import AnimationsDemo from "./components/AnimationsDemo";
import InfoCard from "./components/InfoCard";
import Prop from "./components/Prop";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  if (page === "Prop") {
    return <Prop onBack={() => setPage("home")} />;
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Counter />
        <ColorPicker />
        <TodoList />
        <AnimationsDemo />

        <InfoCard
          title="Props en React"
          description="Las props permiten pasar datos de un componente padre a un componente hijo."
          level="Basico"
        />

        <button className="ver-mas-btn" onClick={() => setPage("Prop")}>
          Ver más
        </button>
      </main>
    </div>
  );
}

export default App;
