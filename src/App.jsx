import { useState } from "react";

function App() {
  // State\
  const [message, setMessage] = useState("Olá, mundo"); // Hook

  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={function () {
          setMessage("Olá, fui clicado!");
        }}
      >
        Mudar mensagem
      </button>
    </div>
  );
}

export default App;
