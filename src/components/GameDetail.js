import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

const GameDetail = () => {
  const gameInfo = useSelector((state) => state.gameInfo);
  const gameDetail = gameInfo.gameDetail;
  const gameScreenshots = gameInfo.gameScreenshots;
  //const gameDetail = gameDetails.game;
  let platforms = [];
  let description = null;
  let screenshots = null;
  if (gameInfo.returned) {
    platforms = gameDetail.platforms.map((platform) => {
      return <li>{platform.platform.slug}</li>;
    });
    description = parse(gameDetail.description);
    screenshots = gameScreenshots.results.map((screenshot) => (
      <img src={screenshot.image} />
    ));
  }

  return (
    <div className="gamedetail">
      {gameInfo.returned && (
        <>
          <h2>{gameDetail.name}</h2>
          <p>{gameDetail.rating}</p>
          <ul>{platforms}</ul>
          <img src={gameDetail.background_image} alt="" />
          {description}
          {screenshots}
        </>
      )}
    </div>
  );
};

export default GameDetail;
