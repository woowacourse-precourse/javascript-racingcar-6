import { Random, Console } from '@woowacourse/mission-utils';

const MESSAGE = {
  ENTER_CAR_NAME:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ERROR: '[ERROR] 입력이 올바른 형식이 아닙니다.',
  FINAL_WINNER: '최종 우승자 : ',
};

class App {
  async play() {}
}

const checkCarNamesAreValid = (userInput) => {
  const input = userInput.split(',');

  const inputHaveOverName = input.find((carName) => carName.length > 5);

  if (inputHaveOverName || inputHaveBlank) {
    throw new Error('[ERROR] 입력이 올바른 형식이 아닙니다.');
  }
  return input;
};

const checkTryNumberIsValid = (userInput) => {
  if (userInput.length != 1) {
    throw new Error('[ERROR] 입력이 올바른 형식이 아닙니다.');
  }

  if (Number.isNaN(Number(userInput)) || Number(userInput) === 0) {
    throw new Error('[ERROR] 입력이 올바른 형식이 아닙니다.');
  }
};

const getCarNames = async () => {
  const carNames = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  return checkCarNamesAreValid(carNames);
};

const getTryNumber = async () => {
  const tryNumber = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  checkTryNumberIsValid(tryNumber);

  return tryNumber;
};

const createScoreBoard = (userInput) => {
  const scoreBoard = [];
  userInput.forEach((car) => {
    scoreBoard.push({ name: car, score: '' });
  });

  return scoreBoard;
};

const createRandomNumber = () => {
  const randomNumber = Random.pickNumberInRange(0, 9);

  return randomNumber;
};

const checkCanMove = () => {
  return createRandomNumber() >= 4 ? true : false;
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

const printGameResult = (calcuratedScoreBoard) => {
  const winner = findWhoIsWinner(calcuratedScoreBoard);
  const winningString = winner.reduce(
    (acc, cur) => (acc += `${cur.name}, `),
    '최종 우승자 : '
  );

  Console.print(winningString.substring(0, winningString.length - 2));
};

const findWhoIsWinner = (calcuratedScoreBoard) => {
  const winner = [];

  calcuratedScoreBoard.forEach((car, index) => {
    const winnerLastIndex = winner[winner.length - 1]?.score.length;
    if (index === 0) {
      winner.push(car);
      return;
    }

    if (car.score.length > winnerLastIndex) {
      winner.length = 0;
      winner.push(car);
      return;
    }
    if (car.score.length === winnerLastIndex) {
      winner.push(car);
      return;
    }
  });

  return winner;
};

const playRacingGame = async () => {
  const carNames = await getCarNames();
  let tryNumber = await getTryNumber();
  let scoreBoard = createScoreBoard(carNames);

  while (tryNumber !== 0) {
    scoreBoard = calcurateScore(scoreBoard);
    printScore(scoreBoard);
    tryNumber -= 1;
  }

  printGameResult(scoreBoard);
};

playRacingGame();
export default App;
