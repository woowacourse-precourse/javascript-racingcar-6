import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    await carCreater();
  }
}

export default App;

async function carCreater() {
  const CAR_NAME = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
  const CAR_NAME_SPLIT = CAR_NAME.split(',');
  validationNameLength(CAR_NAME_SPLIT);
}

function validationNameLength(names) {
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > 5) {
      throw new Error("[ERROR]")
    }
  }
}