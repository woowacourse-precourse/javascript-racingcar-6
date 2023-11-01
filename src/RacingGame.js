import Car from './Car';
import validateCarName from './validation/validationCarName';
import validateRaceCount from './validation/validationRaceCount';
import { Console } from '@woowacourse/mission-utils';

class RacingGame {
  constructor() {
    this.cars = [];
    this.rounds = 0;
  }

  playRound = () => {
    this.cars.forEach((car) => {
      car.move();
    });
  };

  printRoundResults = () => {
    this.cars.forEach((car) => {
      Console.print(car.printScore());
    });
  };

  determineWinners = () => {
    const maxPosition = Math.max(...this.cars.map((car) => car.moveCount));
    return this.cars.filter((car) => car.moveCount === maxPosition);
  };

  printWinners = async (winners) => {
    const winnerNames = winners.map((car) => car.name).join(', ');
    await Console.print(`최종 우승자: ${winnerNames}`);
  };

  playGame = () => {
    Console.print('실행 결과');
    for (let i = 0; i < this.rounds; i++) {
      this.playRound();
      this.printRoundResults();
      Console.print('');
    }
    const winners = this.determineWinners();
    this.printWinners(winners);
  };

  getRaceCount = async () => {
    const raceCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    const raceCountToNum = parseInt(raceCount);
    if (!validateRaceCount(raceCountToNum)) throw new Error('[ERROR] 카운트');

    this.rounds = raceCountToNum;
  };

  getCarNames = async () => {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const carNamesToArray = carNames.split(',');
    if (!validateCarName(carNamesToArray)) throw new Error('[ERROR] 네임');

    this.cars = carNamesToArray.map((name) => new Car(name));
  };

  async start() {
    await this.getCarNames();
    await this.getRaceCount();
    await this.playGame();
  }
}

export default RacingGame;
