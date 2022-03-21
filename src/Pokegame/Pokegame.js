import Pokedex from "../Pokedex/Pokedex";
import React, { useState, useEffect } from "react";
import './pokegame.css'

//TODO: Delete item from array, no repeat cards

const Pokegame = () => {
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

// function remove(items, item) {
//   for (let i=0; i< items.length; i++){
//     if (items[i] === item) {
//       return [ ...items.slice(0,i), ...items.slice(i +1)];
//     }
//   }
// }


  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player1Score, setPlay1Score] = useState("");
  const [player2Score, setPlay2Score] = useState("");

  useEffect(() => {
    const playerOne =
      hand1[0].base_experience +
      hand1[1].base_experience +
      hand1[2].base_experience +
      hand1[3].base_experience ;
    const playerTwo =
    hand2[0].base_experience +
    hand2[1].base_experience +
    hand2[2].base_experience +
    hand2[3].base_experience ;
    setPlay1Score(playerOne);
    setPlay2Score(playerTwo);
    if (playerOne > playerTwo) {
      setPlayer1("Winning Hand");
      setPlayer2("Losing Hand");
    } else if (playerOne < playerTwo) {
      setPlayer1("Losing Hand");
      setPlayer2("Winning Hand");
    } else if (playerOne === playerTwo) {
      setPlayer1("Draw");
      setPlayer2("Draw");
    }
  }, []);

let hand1 = [];
let hand2 =[...pokemonArray];

while(hand1.length < hand2.length){
  //TODO: create a random index and then slice from hand2
  let randIndex = Math.floor(Math.random() * hand2.length);
  let randomPokemon = hand2.splice(randIndex, 1)[0];
  hand1.push(randomPokemon);
}

  return (
    <div className="Pokegame">
      <div className={`${player1 === "Winning Hand" ? "Pokegame-winner" : "Pokegame-loser"}`}>{player1}</div>
      <div className="Pokegame-score">Total experience: {player1Score}</div>

      <Pokedex pokemon={hand1} />
      <div className={`${player2 === "Winning Hand" ? "Pokegame-winner" : "Pokegame-loser"}`}>{player2}</div>
      <div className="Pokegame-score">Total experience: {player2Score}</div>

      <Pokedex pokemon={hand2} />
    </div>
  );
};

export default Pokegame;
