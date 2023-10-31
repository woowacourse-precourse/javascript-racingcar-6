import {MissionUtils} from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.randomNumber = this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  moveForward() {

  }

  stayInPlace() {

  }

  decideMotion() {
    if (this.randomNumber >= 4) {
      this.moveForward();
      console.log(this.randomNumber+'++');
    }
    else {
      this.stayInPlace();
      console.log(this.randomNumber+'--');
    }
  }

  async play() {
    const CARNAME_RESPONSE = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const CARNAMES = CARNAME_RESPONSE.split(',').map(name => name.trim());
    console.log(CARNAMES);

    const PLAYTIME_RESPONSE = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    const PLAYTIME = parseInt(PLAYTIME_RESPONSE);

    if ( isNaN(PLAYTIME) || PLAYTIME < 0 ) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    MissionUtils.Console.print("최종 우승자");
    MissionUtils.Console.print(this.randomNumber);
    MissionUtils.Console.print(this.decideMotion());
  }
}

export default App;
