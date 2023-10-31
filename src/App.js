import { Random, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const carNames = await this.getCarNames();
    const gameCount = await this.getGameCount();

    Console.print('실행결과');
    this.raceGame(carNames, gameCount);
  }

  // 자동차 이름 입력받기
  async getCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const carNamesArr = carNames.split(',');
    carNamesArr.forEach((carName) => this.validateCarName(carName));

    return carNamesArr;
  }

  // 자동차 이름 검증하기
  validateCarName(carName) {
    if (!carName) throw new Error('[ERROR] 입력값이 없습니다.');
    if (!/^[A-Za-z]+$/.test(carName))
      throw new Error(
        '[ERROR] 자동차 이름은 공백없이 알파벳 문자만 포함해야 합니다.',
      );
    if (carName.length > 5)
      throw new Error('[ERROR] 자동차 이름은 5자리 이하여야 합니다.');
  }

  // 경주횟수 입력받기
  async getGameCount() {
    const gameCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    this.validateGameCount(gameCount);
    return gameCount;
  }

  // 경주횟수 검증하기
  validateGameCount(gameCount) {
    if (!gameCount) throw new Error('[ERROR] 입력값이 없습니다.');
    if (Number.isNaN(gameCount)) throw new Error('[ERROR] 숫자가 아닙니다.');
  }

  // 경주 진행하기
  raceGame(carNames, gameCount) {
    const gameProgress = {};
    // 각 차량을 초기 위치로 설정
    carNames.forEach((carName) => {
      gameProgress[carName] = '';
    });

    for (let i = 0; i < gameCount; i++) {
      carNames.forEach((carName) => {
        gameProgress[carName] += this.moveOrStop();
        Console.print(`${carName} : ${gameProgress[carName]}`);
      });
    }
    this.chooseWinner(gameProgress);
  }

  // 자동차 이동
  moveOrStop() {
    const number = Random.pickNumberInRange(0, 9);
    return number >= 4 ? '-' : '';
  }

  // 최종 우승자 도출하기
  chooseWinner(gameProgress) {
    let maxMove = 0;
    let winnerArr = [];

    Object.keys(gameProgress).forEach(([key, value]) => {
      const currentMove = value.length;

      if (currentMove > maxMove) {
        maxMove = currentMove;
        winnerArr = [key];
      } else if (currentMove === maxMove) {
        winnerArr.push(key);
      }
    });

    Console.print(`최종우승자 : ${winnerArr.join(', ')}`);
  }
}

export default App;
