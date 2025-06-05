import { useState } from "react";
import "./App.css";

function App() {
  const [racas, setRacas] = useState([]);

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem vindo aos doguinhos</h1>
        <h4>Confira abaixo uma lista de raças dos doguinhos</h4>
        <ul>
          {racas.map(raca => <li key={raca.nome}>{raca.nome}</li>)}
          <li>???</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
