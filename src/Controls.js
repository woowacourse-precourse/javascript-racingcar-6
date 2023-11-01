import { read, write } from './IO';

const TEXT = {
  ENTER_CAR: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ENTER_MOVES: '시도할 횟수는 몇 회인가요?\n',
  ERROR_CAR: '[ERROR] 자동차 이름은 공백이 아닌 5자 이하여야 합니다.',
  ERROR_MOVES: '[ERROR] 시도 횟수는 양의 정수여야 합니다.',
  CHAMPIONS: '최종 우승자',
};

class Controls {
  // get user input
  static async getCarNames() {
    const userInput = await read(TEXT.ENTER_CAR);
    if (!this.validateCarNames(userInput)) {
      throw new Error(TEXT.ERROR_CAR);
    }
    const carNames = userInput.split(',');
    return carNames;
  }

  static async getMoves() {
    const userInput = await read(TEXT.ENTER_MOVES);
    if (!this.validateMoves(userInput)) {
      throw new Error(TEXT.ERROR_MOVES);
    }
    return Number(userInput);
  }

  // user input validators
  static validateCarNames(query) {
    const carNames = query.split(',').map((name) => name.trim());
    return carNames.every((name) => name.length >= 1 && name.length <= 5);
  }

  static validateMoves(query) {
    const moves = query;
    if (!/^\d+$/.test(moves)) return false;
    return Number(moves) > 0;
  }

  // display functions
  static printCars(cars) {
    const names = Array.from(Object.keys(cars));

    write('');
    for (let i = 0; i < names.length; i += 1) {
      const name = names[i];
      const position = cars[name];

      const bar = new Array(position + 1).join('-');
      const car = `${name} : ${bar}`;

      write(car);
    }
  }

  static printChampions(champions) {
    const championNames = champions.join(', ');
    write('');
    write(`${TEXT.CHAMPIONS} : ${championNames}`);
  }
}

export default Controls;
