import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [racas, setRacas] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/doguinhos")
      .then((response) => response.json())
      .then((data) => {
        setRacas(data);
      });
  }, []); // o [] significa que o useEffect só será executado uma vez

  useEffect(() => {
    if (busca && busca.length > 3) {
      fetch(`http://localhost:8080/doguinhos?nome=${busca}`)
        .then((response) => response.json())
        .then((data) => {
          setRacas(data);
        });
    }
  }, [busca]); // o useEffect será executado sempre que a busca mudar

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem vindo aos doguinhos</h1>
        <h4>Confira abaixo uma lista de raças dos doguinhos</h4>
        <input
          placeholder="Buscar por raça"
          onChange={(evento) => setBusca(evento.target.value)}
        />
        <ul>
          {racas.map((raca) => (
            <li key={raca.nome}>{raca.nome}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
