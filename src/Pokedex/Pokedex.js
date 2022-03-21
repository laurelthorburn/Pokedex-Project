import Pokecard from "../Pokecard/Pokecard";
import './pokedex.css'

const Pokedex = ({pokemon}) => {

  return (
    <div className="Pokedex">
        <Pokecard pokemon={pokemon[0]} />
        <Pokecard pokemon={pokemon[1]} />
        <Pokecard pokemon={pokemon[2]} />
        <Pokecard pokemon={pokemon[3]} />
      </div>
  );
};

export default Pokedex;
