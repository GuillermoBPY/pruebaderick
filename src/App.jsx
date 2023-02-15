import Header from "./components/Header";
import "./styles/App.css";
import VideoBg from "./components/VideoBg";
import axios from "axios";
import { useEffect, useState } from "react";
import Characters from "./components/pages/Characters";
function App() {
  const [characters, setcharacters] = useState("");
  const { info, results } = characters;

  const charUrl = "https://rickandmortyapi.com/api/character";

  const getAllCharacters = () => {
    axios
      .get(charUrl)
      .then((rest) => setcharacters(rest.data))
      .catch((err) => console.log(err));
  };

  useEffect(getAllCharacters, []);

  return (
    <div className="App">
      <VideoBg />
      <Header />
      <div className="charactersgrid">
        {results &&
          results.map((result) => (
            <Characters key={result.id} result={result} />
          ))}
      </div>
    </div>
  );
}

export default App;
