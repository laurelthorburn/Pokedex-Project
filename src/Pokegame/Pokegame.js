import Pokedex from "../Pokedex/Pokedex";
import React, { useState, useEffect } from "react";
import './pokegame.css'

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

  const card1 = pokemonArray[Math.floor(Math.random() * 8)];
  const card2 = pokemonArray[Math.floor(Math.random() * 8)];
  const card3 = pokemonArray[Math.floor(Math.random() * 8)];
  const card4 = pokemonArray[Math.floor(Math.random() * 8)];
  const card5 = pokemonArray[Math.floor(Math.random() * 8)];
  const card6 = pokemonArray[Math.floor(Math.random() * 8)];
  const card7 = pokemonArray[Math.floor(Math.random() * 8)];
  const card8 = pokemonArray[Math.floor(Math.random() * 8)];

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player1Score, setPlay1Score] = useState("");
  const [player2Score, setPlay2Score] = useState("");

  useEffect(() => {
    const playerOne =
      card1.base_experience +
      card2.base_experience +
      card3.base_experience +
      card4.base_experience;
    const playerTwo =
      card5.base_experience +
      card6.base_experience +
      card7.base_experience +
      card8.base_experience;
    setPlay1Score(playerOne);
    setPlay2Score(playerTwo);
    if (playerOne > playerTwo) {
      setPlayer1("Winner");
      setPlayer2("Loser");
    } else if (playerOne < playerTwo) {
      setPlayer1("Loser");
      setPlayer2("Winner");
    } else if (playerOne === playerTwo) {
      setPlayer1("Draw");
      setPlayer2("Draw");
    }
  }, []);

  return (
    <div className="Pokegame">
      <div className={`${player1 === "Winner" ? "Pokegame-winner" : "Pokegame-loser"}`}>{player1}</div>
      <div className="Pokegame-score">{player1Score}</div>

      <Pokedex card1={card1} card2={card2} card3={card3} card4={card4} />
      <div className={`${player2 === "Winner" ? "Pokegame-winner" : "Pokegame-loser"}`}>{player2}</div>
      <div className="Pokegame-score">{player2Score}</div>

      <Pokedex card1={card5} card2={card6} card3={card7} card4={card8} />
    </div>
  );
};

export default Pokegame;
