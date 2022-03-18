import Pokecard from "../Pokecard/Pokecard";
import './pokedex.css'

const Pokedex = ({card1, card2, card3, card4}) => {

  return (
    <div className="Pokedex">
        <Pokecard pokemon={card1} />
        <Pokecard pokemon={card2} />
        <Pokecard pokemon={card3} />
        <Pokecard pokemon={card4} />
      </div>
  );
};

export default Pokedex;
