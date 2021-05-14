import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("default");
  const [pokemon, setPokemon] = useState(null);
  console.log(pokemon);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((result) => result.json())
      .then((json) => setPokemon(json));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          fetch("https://pokeapi.co/api/v2/pokemon/" + name)
            .then((result) => result.json())
            .then((json) => setPokemon(json));
        }}
      >
        Submit
      </button>
      <div>{pokemon?.name}</div>
    </div>
  );
}

export default App;
