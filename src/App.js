import {MissionUtils} from '@woowacourse/mission-utils';
import RacingCar from "./RacingCar.js";

class App {
  async play() {
    const CARNAME_RESPONSE = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const CARNAMES = CARNAME_RESPONSE.split(',').map(name => {
      if (name.length >= 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
      return name.trim()
    });

    const PLAYTIME_RESPONSE = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    MissionUtils.Console.print("");
    const PLAYTIME = parseInt(PLAYTIME_RESPONSE);

    if ( isNaN(PLAYTIME) || PLAYTIME < 0 ) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    const racingCar = new RacingCar(CARNAMES, PLAYTIME);
    racingCar.runRace();
  }
}

export default App;
