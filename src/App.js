import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const CAR_NAME_SPLIT = await carCreater();
    const VALIDATED_TRY_NUMBER = await tryCounter();
    carMoveResult(CAR_NAME_SPLIT, VALIDATED_TRY_NUMBER);
    //console.log(CAR_MOVE_STORAGE);
  }
}

export default App;

const CAR_MOVE_STORAGE = {

}

async function carCreater() {
  MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
  const CAR_NAME = await MissionUtils.Console.readLineAsync('');
  const CAR_NAME_SPLIT = CAR_NAME.split(',');
  validationNameLength(CAR_NAME_SPLIT);
  carNameSave(CAR_NAME_SPLIT);
  return CAR_NAME_SPLIT;
}

function validationNameLength(names) {
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > 5) {
      throw new Error("[ERROR]")
    }
  }
}

function carNameSave(carnames) {
  for (let i = 0; i < carnames.length; i++) {
    CAR_MOVE_STORAGE[carnames[i]] = "";
    //console.log(CAR_MOVE_STORAGE)
  }
}

async function tryCounter() {
  MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
  const TRY_NUMBER = await MissionUtils.Console.readLineAsync('');
  const VALIDATED_TRY_NUMBER = validationTryNumber(TRY_NUMBER);
  //console.log(VALIDATER_TRY_NUMBER)
  return VALIDATED_TRY_NUMBER;
}

function validationTryNumber(number) {
  if (/^[+]?\d+$/.test(number)) {
    return Number(number);
  } else {
    throw new Error("[ERROR]");
  }
}

function carMoveResult(carnames, trynumber) {
  MissionUtils.Console.print("");
  MissionUtils.Console.print("실행 결과");
  for (let i = 0; i < trynumber; i++) {
    carMover(carnames);
    MissionUtils.Console.print("");
  }
}

function carMover(carnames) {
  for (let i = 0; i < carnames.length; i++) {
    carMoveOrStop(carnames[i]);
  }
}

function carMoveOrStop(carname) {
  const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);
  if (RANDOM_NUMBER >= 4) {
    CAR_MOVE_STORAGE[carname] += "-";
  }
  MissionUtils.Console.print(`${carname} : ${CAR_MOVE_STORAGE[carname]}`);
}