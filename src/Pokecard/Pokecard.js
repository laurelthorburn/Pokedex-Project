import "./pokecard.css";

const Pokecard = ({ pokemon }) => {
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
      <div key={pokemon.id} className="Pokecard-card">
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${niceImage(
            pokemon.id
          )}.png`}
          alt={pokemon.name}
          className="Pokecard-img"
        />
        <div className="Pokecard-name">{pokemon.name}</div>
        <div className="Pokecard-type">Type: {pokemon.type}</div>
        <div className="Pokecard-exp" base_exp={pokemon.base_experience}>
          EXP: {pokemon.base_experience}
        </div>
      </div>
    </div>
  );
};

export default Pokecard;
