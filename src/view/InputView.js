import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readRacingCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    return carNames;
  },
};

export default InputView;
