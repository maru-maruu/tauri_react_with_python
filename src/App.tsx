import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [pythonMsg, setPythonMsg] = useState("");
  const [mouseMoveMsg, setMouseMoveMsg] = useState("");
  const [dx, setDx] = useState(100);
  const [dy, setDy] = useState(0);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  async function runPython() {
    setPythonMsg(await invoke("run_python"));
  }

  async function moveMouse() {
    try {
      const result = await invoke<string>("move_mouse", { dx, dy });
      setMouseMoveMsg(result);
    } catch (e) {
      setMouseMoveMsg(String(e));
    }
  }

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>

      <button type="button" onClick={runPython}>
        Run Python
      </button>
      <p>{pythonMsg}</p>

      <div className="row">
        <input
          type="number"
          value={dx}
          onChange={(e) => setDx(Number(e.currentTarget.value))}
          aria-label="X移動量"
        />
        <input
          type="number"
          value={dy}
          onChange={(e) => setDy(Number(e.currentTarget.value))}
          aria-label="Y移動量"
        />
        <button type="button" onClick={moveMouse}>
          マウス移動テスト
        </button>
      </div>
      <p>{mouseMoveMsg}</p>
    </main>
  );
}

export default App;
