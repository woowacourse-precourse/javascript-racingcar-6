import { Console } from '@woowacourse/mission-utils';
import { validator } from './utils/validaotor.js';
import { MESSAGE_FORMAT } from './contants/messageFormat.js';
import { CAR_NAME_ROLE } from './contants/racingGame.js';

export default class RacingGame {
  #carList = null;
  #round = null;

  async run() {
    await this.#requireCarList();
    await this.#requireRound();
  }

  async #inputUser(message) {
    const input = await Console.readLineAsync(message);
    if (validator.isEmptyString(input)) {
      throw new Error(MESSAGE_FORMAT.error('사용자의 입력이 없습니다.'));
    }
    return input;
  }

  async #requireCarList() {
    const input = await this.#inputUser(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    const carList = input.split(',');
    this.#carList = this.#validateCarList(carList);
  }

  async #requireRound() {
    const input = await this.#inputUser('시도할 횟수는 몇 회 인가요?\n');

    const round = Number(input);
    this.#round = this.#validateRound(round);
  }

  #validateCarList(carList) {
    const { isValidCarName, isDuplicatedCarName } = validator;

    carList.forEach((car) => {
      if (!isValidCarName(car)) {
        const message = MESSAGE_FORMAT.error(
          `자동차 이름은 ${CAR_NAME_ROLE.minLengh}이상 ${CAR_NAME_ROLE.maxLengh}이하로 입력해 주세요.`,
        );
        throw new Error(message);
      }
    });

    if (isDuplicatedCarName(carList)) {
      const message = MESSAGE_FORMAT.error('자동차 이름이 중복 되었습니다.');
      throw new Error(message);
    }
    return carList;
  }

  #validateRound(round) {
    if (!validator.isValidRound(round)) {
      const message = MESSAGE_FORMAT.error('시도할 횟수는 1이상의 숫자를 입력해 주세요.');
      throw new Error(message);
    }
    return round;
  }
}
