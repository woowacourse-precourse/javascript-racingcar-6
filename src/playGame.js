import getRandomNumber from "./getRandomNumber";

const playGame = (player) => {
  const FORWARD_NUMBER = 4;
  Object.keys(player).map((key) => {
    if (getRandomNumber() >= FORWARD_NUMBER) {
      player[key] += "-";
    }
  });
};

export default playGame;
