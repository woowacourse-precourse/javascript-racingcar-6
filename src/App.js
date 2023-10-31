import { getCarNames, getTryNumber } from '../modules/userInput';
import { printGameResult } from '../modules/gameResult';
import {
  createScoreBoard,
  calcurateScore,
  printScore,
} from '../modules/scoreBoard';
import {
  checkCarNamesAreValid,
  checkTryNumberIsValid,
} from '../modules/inputValidation';

const MESSAGE = {
  ENTER_CAR_NAME:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ERROR: '[ERROR] 입력이 올바른 형식이 아닙니다.',
  FINAL_WINNER: '최종 우승자 : ',
};

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
