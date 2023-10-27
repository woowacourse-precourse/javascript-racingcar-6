import { Console, Random } from '@woowacourse/mission-utils';
class App {
  carList;
  moveCount;
  gameProgress;
  gameWinner;

  async play() {
    await this.setCarList();
    await this.printGameLimit();
    this.setCarProgress();
    this.ouputGameResult();
  }

  async setCarList() {
    const inputResult = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    this.validateCarNameList(inputResult);
  }

  ouputGameResult() {
    Console.print('실행 결과');
    Array.from({ length: this.moveCount }, () => this.calculateCarMove());
    this.carlcultateWinner();
    Console.print(`최종 우승자 : ${this.gameWinner}`);
  }

  validateCarNameList(inputResult) {
    this.carList = inputResult.split(',');
    this.carList.forEach(car => this.validateCarName(car));

    const isDuplicate = this.isDuplicateCarName();
    if (isDuplicate) {
      throw new Error('[ERROR] car 이름은 중복이 불가합니다.');
    }
  }

  isDuplicateCarName() {
    const set = new Set(this.carList);
    return set.size < this.carList.length;
  }

  validateCarName(carName) {
    if (carName === '') {
      throw new Error('[ERROR] car 이름은 비워 둘 수 없습니다.');
    }

    if (carName.length > 5) {
      throw new Error('[ERROR] car 이름은 5자 이하만 가능합니다.');
    }
  }

  async printGameLimit() {
    this.moveCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    this.validateCountNumber();
    Console.print(`${this.moveCount}회`);
  }

  setCarProgress() {
    this.gameProgress = {};
    this.carList.forEach(car => {
      this.gameProgress[car] = '';
    });
  }

  calculateCarMove() {
    for (const key in this.gameProgress) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (randomNumber >= 4) {
        this.gameProgress[key] += '-';
      }

      const result = `${key} : ${this.gameProgress[key]}`;
      Console.print(result);
    }
    Console.print('\n');
  }

  carlcultateWinner() {
    this.gameWinner = '';
    const longestDistance = this.calculateLongestDistance();
    this.printWinner(longestDistance);
  }

  calculateLongestDistance() {
    const gameArrays = Object.values(this.gameProgress);
    const longestDistance = gameArrays.reduce((max, game) => Math.max(max, game.length), 0);

    return longestDistance;
  }

  printWinner(longestDistance) {
    const winnerList = [];
    for (const key in this.gameProgress) {
      const gameDistance = this.gameProgress[key].length;
      if (gameDistance === longestDistance) {
        winnerList.push(key);
      }
    }

    this.gameWinner = winnerList.join(', ');
  }

  validateCountNumber() {
    const inputValueNumber = Number(this.moveCount);
    if (inputValueNumber % 1 !== 0) {
      throw new Error('[ERROR] 정수를 입력해주세요.');
    }

    if (inputValueNumber < 0) {
      throw new Error('[ERROR] 음수를 입력할 수 없습니다');
    }

    if (typeof inputValueNumber !== 'number') {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }

    if (inputValueNumber === 0) {
      throw new Error('[ERROR] 1이상의 숫자를 입력해주세요.');
    }

    if (inputValueNumber === '') {
      throw new Error('[ERROR] 횟수를 비워둘 수 없습니다.');
    }

    return false;
  }
}

export default App;
