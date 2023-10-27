import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getCarNames() {
    try {
      return await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );
    } catch (error) {
      throw new Error(error);
    }
  },

  async getTotalRounds() {
    try {
      return await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    } catch (error) {
      throw error;
    }
  },
};

export default InputView;
