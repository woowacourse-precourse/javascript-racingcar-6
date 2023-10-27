import { MissionUtils } from '@woowacourse/mission-utils';

export default class Game {
  start() {
    this.enterCarNames();
  }

  async enterCarNames() {
    MissionUtils.Console.print(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    const carNameStr = await MissionUtils.Console.readLineAsync('');
    const carList = carNameStr.split(',');
    console.log(carList);

    if (carList.filter((item) => item.length > 5).length) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
  }
}
