import { getCarNames, getTryNumber } from '../modules/userInput.js';
import { printGameResult } from '../modules/gameResult.js';
import {
  createScoreBoard,
  calcurateScore,
  printScore,
} from '../modules/scoreBoard.js';
import {
  checkCarNamesAreValid,
  checkTryNumberIsValid,
} from '../modules/inputValidation.js';

const playRacingGame = async () => {
  let carNames = await getCarNames();
  carNames = checkCarNamesAreValid(carNames);

  let tryNumber = await getTryNumber();
  checkTryNumberIsValid(tryNumber);

  let scoreBoard = createScoreBoard(carNames);

  while (tryNumber !== 0) {
    scoreBoard = calcurateScore(scoreBoard);
    printScore(scoreBoard);
    tryNumber -= 1;
  }

  printGameResult(scoreBoard);
};

class App {
  async play() {
    await playRacingGame();
  }
}

export default App;
