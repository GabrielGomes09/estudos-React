import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([
    "Pagar a conta de luz",
    "Estudar React JS",
  ]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@tarefas");

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div className="App">
      <h1>TaskList</h1>

      <form onSubmit={handleRegister}>
        <label>Nova tarefa:</label>
        <br />
        <input
          placeholder="Digite a tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Registrar</button>
      </form>
      <br />

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
