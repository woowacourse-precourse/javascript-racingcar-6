import { messages } from "../output/messages";

export default async function composeResult(carScores) {
  const topScore = findTopScore(carScores);
  const winners = findWinners(carScores, topScore);

  return messages.FINAL_RESULT + winners;
};

const findTopScore = (carScores) => {
  let topScore = -1;
  carScores.forEach((car) => {
    if (car.score > topScore) {
      topScore = car.score;
    }
  });
  
  return topScore;
};

const findWinners = (carScores, topScore) => {
  const winnerList = carScores.filter((car) => car.score === topScore);
  const winnerStr = winnerList.map((winner) => winner.name).join(", ");

  return winnerStr;
};
