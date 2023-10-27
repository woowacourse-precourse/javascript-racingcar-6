import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    await carCreater();
  }
}

export default App;

async function carCreater() {
  MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
  const CAR_NAME = await MissionUtils.Console.readLineAsync('');
  const CAR_NAME_SPLIT = CAR_NAME.split(',');
  validationNameLength(CAR_NAME_SPLIT);
  return tryCounter();
}

function validationNameLength(names) {
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > 5) {
      throw new Error("[ERROR]")
    }
  }
}

async function tryCounter() {
  MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
  const TRY_NUMBER = await MissionUtils.Console.readLineAsync('');
  const VALIDATER_TRY_NUMBER = validationTryNumber(TRY_NUMBER);
  //console.log(VALIDATER_TRY_NUMBER)
}

function validationTryNumber(number) {
  if (/^[+]?\d+$/.test(number)) {
    return Number(number);
  } else {
    throw new Error("[ERROR]");
  }
}