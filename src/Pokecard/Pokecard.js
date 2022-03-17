import "./pokecard.css";

const Pokecard = (props) => {
  console.log(props.base_exp)
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

  const randoPokeCard = pokemonArray[Math.floor(Math.random() * 8)]


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
          <div key={randoPokeCard.id} className="Pokecard-card">
            <div className="Pokecard-name">{randoPokeCard.name}</div>
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${niceImage(
                randoPokeCard.id
              )}.png`}
              alt={randoPokeCard.name}
            />
            <div className="Pokecard-type">{randoPokeCard.type}</div>
            <div className="Pokecard-exp" base_exp={randoPokeCard.base_experience}>{randoPokeCard.base_experience}</div>
          </div>
      
    </div>
  );
};

export default Pokecard;
