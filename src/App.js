import { MissionUtils } from '@woowacourse/mission-utils';

const INPUT_CAR_NAMES_MSG =
  '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';

class App {
  async getCarNameArr() {
    try {
      const carNames = await MissionUtils.Console.readLineAsync(
        INPUT_CAR_NAMES_MSG
      );
      const carNameArr = carNames.split(',');
      return carNameArr;
    } catch (error) {
      MissionUtils.Console.print('입력 받는 도중 에러가 발생했습니다.', error);
      return [];
    }
  }

  async play() {
    const carNameArr = await this.getCarNameArr();
  }
}

export default App;
