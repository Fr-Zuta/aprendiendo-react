// src/components/TodoList.jsx
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [showCode, setShowCode] = useState(false);

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { text, done: false }]);
    setText("");
  };

  const toggleDone = (index) => {
    setTodos(
      todos.map((t, i) =>
        i === index ? { ...t, done: !t.done } : t
      )
    );
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <section className="card">
      <button className="code-btn" onClick={() => setShowCode(!showCode)}>
        {"</>"}
      </button>

      <h2>Lista de tareas</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={addTodo}>Agregar</button>

      <ul>
        {todos.map((todo, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              textDecoration: todo.done ? "line-through" : "none",
              animation: "slideIn 0.4s",
            }}
          >
            {todo.text}
            <button onClick={() => toggleDone(i)}>✔</button>
            <button onClick={() => removeTodo(i)}>✖</button>
          </li>
        ))}
      </ul>

      {showCode && (
        <pre className="code">{`setTodos([...todos, { text, done: false }]);`}</pre>
      )}
    </section>
  );
}

export default TodoList;
