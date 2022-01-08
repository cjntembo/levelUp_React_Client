import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "./GameProvider.js";
import { useHistory } from "react-router-dom";
import "./Game.css"

export const GameForm = () => {
  const history = useHistory();
  const { getGames, createGame, getGameTypes, gameTypes } = useContext(GameContext);

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [currentGame, setCurrentGame] = useState({
    skill_level: 1,
    number_of_players: 0,
    title: "",
    maker: "",
    game_type: 0,
  });

  // const game = {
          //   maker: currentGame.maker,
          //   title: currentGame.title,
          //   number_of_players: parseInt(currentGame.number_of_players),
          //   skill_level: parseInt(currentGame.skill_level),
          //   game_type: parseInt(currentGame.game_type),
          // };

          // // Send POST request to your API
          // createGame(game).then(() => history.push("/games"));

  /*
        Get game types on initialization so that the <select>
        element presents game type choices to the user.
    */
  useEffect(() => {
    getGameTypes().then(getGames())
  }, []);

  /*
        REFACTOR CHALLENGE START

        Can you refactor this code so that all property
        state changes can be handled with a single function
        instead of five functions that all, largely, do
        the same thing?

        One hint: [event.target.name]
    */

  const handleControlledInputChange = (event) => {
    const newGameState = Object.assign({}, currentGame)
    newGameState[event.target.name] = event.target.value
    setCurrentGame(newGameState)
  }

  // const changeGameTitleState = (event) => {
  //   const newGameState = { ...currentGame };
  //   newGameState.title = event.target.value;
  //   setCurrentGame(newGameState);
  // };

  // const changeGameMakerState = (event) => {
  //   const newGameState = { ...currentGame };
  //   newGameState.maker = event.target.value;
  //   setCurrentGame(newGameState);
  // };

  // const changeGamePlayersState = (event) => {
  //   const newGameState = { ...currentGame };
  //   newGameState.number_of_players = event.target.value;
  //   setCurrentGame(newGameState);
  // };

  // const changeGameSkillLevelState = (event) => {
  //   const newGameState = { ...currentGame };
  //   newGameState.skill_level = event.target.value;
  //   setCurrentGame(newGameState);
  // };

  // const changeGameTypeState = (event) => {
  //   const newGameState = { ...currentGame };
  //   newGameState.game_type = event.target.value;
  //   setCurrentGame(newGameState);
  // };
  /* REFACTOR CHALLENGE END */

  return (
      <>
    <form className="gameForm">
      <h2 className="gameForm__title">Register New Game</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            required
            autoFocus
            className="form-control"
            value={currentGame.title}
            // onChange={changeGameTitleState}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="maker">Maker: </label>
          <input
            type="text"
            name="maker"
            required
            autoFocus
            className="form-control"
            value={currentGame.maker}
            // onChange={changeGameMakerState}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="number_of_players">Number of Players: </label>
          <input
            type="text"
            name="number_of_players"
            required
            autoFocus
            className="form-control"
            value={currentGame.number_of_players}
            // onChange={changeGamePlayersState}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="skill_level">Skill Level: </label>
          <input
            type="text"
            name="skill_level"
            required
            autoFocus
            className="form-control"
            value={currentGame.skill_level}
            // onChange={changeGameSkillLevelState}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="game_type">Game Type: </label>
          <input
            type="text"
            name="game_type"
            required
            autoFocus
            className="form-control"
            value={currentGame.game_type}
            // onChange={changeGameTypeState}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      {/* You create the rest of the input fields for each game property */}

      <button
        type="submit"
        onClick={(evt) => {
          // Prevent form from being submitted
          evt.preventDefault();

          
        }}
        className="btn btn-primary"
      >
        Create
      </button>
    </form>
    </>
  );
};