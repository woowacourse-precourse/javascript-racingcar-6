import {MissionUtils} from '@woowacourse/mission-utils';
import AboutCar from "./AboutCar.js";
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
    console.log(CARNAMES);

    const PLAYTIME_RESPONSE = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const PLAYTIME = parseInt(PLAYTIME_RESPONSE);

    if ( isNaN(PLAYTIME) || PLAYTIME < 0 ) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    MissionUtils.Console.print(`최종 우승자 : ${CARNAMES}`);
  }
}

export default App;
