import { MissionUtils } from '@woowacourse/mission-utils';

export async function validateCarNames(carNames) {
  if (carNames.some((name) => name.length > 5)) {
    throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
  }

  const set = new Set(carNames);
  if (set.size !== carNames.length) {
    throw new Error('[ERROR] 자동차 이름은 중복이 불가능합니다.');
  }

  if (carNames.length === 1) {
    throw new Error(
      '[ERROR] 자동차 이름은 쉼표를 기준으로 구분해 작성해야합니다.',
    );
  }
}

export async function validateTryNumber(tryNumberInput) {
  const regex = /^\d+$/;
  if (!regex.test(tryNumberInput)) {
    throw new Error('[ERROR] 입력하신 시도할 횟수가 잘못된 형식입니다.');
  }
}

class User {
  constructor() {
    this.carNames = [];
    this.tryNumber = 0;
  }

  async getCarNames() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) \n',
      );
      const carNames = input.split(',').map((name) => name.trim());
      validateCarNames(carNames);
      this.carNames = carNames;
    } catch (error) {
      console.error(error.message);
    }
  }

  async getTryNumber() {
    try {
      const tryNumberInput =
        await MissionUtils.Console.readLineAsync(
          '시도할 횟수는 몇 회인가요?\n',
        );
      validateTryNumber(tryNumberInput);
      this.tryNumber = parseInt(tryNumberInput);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default User;
