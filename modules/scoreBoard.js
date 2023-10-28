import { Console } from '@woowacourse/mission-utils';
import { checkCanMove } from './utils';

const createScoreBoard = (userInput) => {
  const scoreBoard = [];
  userInput.forEach((car) => {
    scoreBoard.push({ name: car, score: '' });
  });

  return scoreBoard;
};

const calcurateScore = (scoreBoard) => {
  const calcuratedScoreBoard = [...scoreBoard];
  calcuratedScoreBoard.forEach((car) => {
    if (checkCanMove()) {
      car.score += '-';
    }
  });
  return calcuratedScoreBoard;
};

const printScore = (calcuratedScoreBoard) => {
  calcuratedScoreBoard.forEach((car) => {
    Console.print(`${car.name} : ${car.score}`);
  });
  Console.print('');
};

export { createScoreBoard, calcurateScore, printScore };
