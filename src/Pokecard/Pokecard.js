import "./pokecard.css";

const Pokecard = () => {
  const pokemonArray = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];

  //TODO: use fancier images
  function niceImage(i) {
    if (i < 99 && i > 9) {
      i = "0" + i;
    } else if (i < 10) {
      i = "00" + i;
    } // add zero in front of numbers < 99
    return i;
  }

  return (
    <div className="Pokecard">
      {pokemonArray.map((pokemon) => {
        return (
          <div key={pokemon.id} className="Pokecard-card">
            <div className="Pokecard-name">{pokemon.name}</div>
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${niceImage(
                pokemon.id
              )}.png`}
              alt={pokemon.name}
            />
            <div className="Pokecard-type">{pokemon.type}</div>
            <div className="Pokecard-exp">{pokemon.base_experience}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Pokecard;
