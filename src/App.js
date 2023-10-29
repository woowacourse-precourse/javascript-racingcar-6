import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const CAR_NAME_SPLIT = await carCreater();
    const VALIDATED_TRY_NUMBER = await tryCounter();
    carMoveResult(CAR_NAME_SPLIT, VALIDATED_TRY_NUMBER);
    winner(CAR_NAME_SPLIT);
  }
}

export default App;

const CAR_MOVE_STORAGE = {

}

let winnerarray = [];

async function carCreater() {
  MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
  const carName = await MissionUtils.Console.readLineAsync('');
  const carNameSplit = carName.split(',');
  validationNameLength(carNameSplit);
  carNameSave(carNameSplit);
  return carNameSplit;
}

function validationNameLength(names) {
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > 5) {
      throw new Error("[ERROR] 자동차 이름이 5자를 초과했습니다.")
    }
  }
}

function carNameSave(carnames) {
  for (let i = 0; i < carnames.length; i++) {
    CAR_MOVE_STORAGE[carnames[i]] = "";
  }
}

async function tryCounter() {
  MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
  const TRY_NUMBER = await MissionUtils.Console.readLineAsync('');
  const VALIDATED_TRY_NUMBER = validationTryNumber(TRY_NUMBER);
  return VALIDATED_TRY_NUMBER;
}

function validationTryNumber(number) {
  if (/^[+]?[1-9]\d*$/.test(number)) {
    return Number(number);
  } else {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
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

function winner(carnames) {
  var maxmoves = 0;
  for (let i = 0; i < carnames.length; i++) {
    maxmoves = Math.max(CAR_MOVE_STORAGE[carnames[i]].length,maxmoves);
  }
  for (let i = 0; i < carnames.length; i++) {
    const MOVE = CAR_MOVE_STORAGE[carnames[i]].length
    if (MOVE === maxmoves) {
      winnerarray.push(carnames[i]); 
    }
  }
  printWinner();
}

function printWinner() {
  if (winnerarray.length === 1) {
    MissionUtils.Console.print(`최종 우승자 : ${winnerarray[0]}`);
  } else {
    printWinners()
  }
}

function printWinners() {
  var winners = winnerarray[0]
  for (let i = 1; i < winnerarray.length; i++) {
    winners += `, ${winnerarray[i]}`
  }
  MissionUtils.Console.print(`최종 우승자 : ${winners}`);
}