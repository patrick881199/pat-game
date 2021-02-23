import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faGamepad,
  faStar as sStar,
  faStarHalfAlt as hStar,
} from "@fortawesome/free-solid-svg-icons";
import { faPlaystation, faXbox } from "@fortawesome/free-brands-svg-icons";
import { faStar as eStar } from "@fortawesome/free-regular-svg-icons";

const GameDetail = () => {
  const playstation = <FontAwesomeIcon icon={faPlaystation} />;
  const xbox = <FontAwesomeIcon icon={faXbox} />;
  const pc = <FontAwesomeIcon icon={faDesktop} />;
  const gamepad = <FontAwesomeIcon icon={faGamepad} />;

  const solidStar = <FontAwesomeIcon icon={sStar} />;
  const harfStar = <FontAwesomeIcon icon={hStar} />;
  const emptyStar = <FontAwesomeIcon icon={eStar} />;

  const gameInfo = useSelector((state) => state.gameInfo);
  const gameDetail = gameInfo.gameDetail;
  const gameScreenshots = gameInfo.gameScreenshots;

  const filteredIconList = (platforms) => {
    //text to icon
    const iconList = platforms.map((p) => {
      const platform = p.platform.slug;
      if (platform.includes("xbox")) {
        return xbox;
      } else if (platform.includes("pc")) {
        return pc;
      } else if (platform.includes("playstation")) {
        return playstation;
      } else {
        return gamepad;
      }
    });

    //get rid of duplication
    return iconList.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  };

  const ratingStars = [];

  const platforms = filteredIconList(gameDetail.platforms);
  const description = parse(gameDetail.description);
  const screenshots = gameScreenshots.results.map((screenshot) => (
    <img src={screenshot.image} />
  ));

  const rating = gameDetail.rating;
  for (let i = 0; i < 5; i++) {
    if (rating - i > 0.5 && rating - i < 1) {
      ratingStars.push(harfStar);
    } else if (rating - i >= 1) {
      ratingStars.push(solidStar);
    } else {
      ratingStars.push(emptyStar);
    }
  }

  return (
    <StyledGameDetail>
      <Content>
        <Title>
          <div className="info">
            <h2>{gameDetail.name}</h2>
            <p>{gameDetail.rating}</p>
            <Stars>{ratingStars}</Stars>
          </div>
          <Plarforms>
            <h3>Platforms</h3>
            <PlarformsIcon>{platforms}</PlarformsIcon>
          </Plarforms>
        </Title>
        <img src={gameDetail.background_image} alt="" />
        {description}
        {screenshots}
      </Content>
    </StyledGameDetail>
  );
};

const StyledGameDetail = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;

const Content = styled(motion.div)`
  background-color: white;
  width: 70%;
  margin: auto;
  padding: 3rem;
  img {
    width: 100%;
  }
`;

const Title = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;

const Stars = styled(motion.div)`
  font-size: 2.5rem;
`;

const PlarformsIcon = styled(motion.div)`
  flex: 1 1 20rem;
  font-size: 2.5rem;
  .svg-inline--fa {
    margin: 0rem 1rem;
  }
`;

const Plarforms = styled(motion.div)`
  text-align: center;
`;
export default GameDetail;
