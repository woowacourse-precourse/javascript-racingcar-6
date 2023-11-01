import { MissionUtils } from "@woowacourse/mission-utils";
import { carMoveStorage } from "./CarMoveStorage.js";
import { carMoveOrStop } from "./CarMove.js";
import { winner } from "./Winner.js";
import { carMoveNumberValidater } from "./CarMoveNumberValidater.js";
import { carNameSpliter } from "./CarNameSpliter.js";

class App {
  async play() {
    const carNameSplit = await carCreater();
    const validatedTryNumber = await carMoveNumberValidater();
    carMoveResult(carNameSplit, validatedTryNumber);
    winner(carNameSplit, carMoveStorage);
  }
}

export default App;

async function carCreater() {
  const carNameSplit = await carNameSpliter();
  validationName(carNameSplit);
  carMoveStorage.carNameSave(carNameSplit);
  return carNameSplit;
}

function validationName(names) {
  validationNameLength(names);
  validationNameDuplication(names);
}

function validationNameLength(names) {
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > 5) {
      throw new Error("[ERROR] 자동차 이름이 5자를 초과했습니다.")
    }
  }
}

function validationNameDuplication(names) {
  for (let i = 0; i < names.length-1; i++) {
    if (names[i] === names[i+1]) {
      throw new Error("[ERROR] 자동차 이름이 중복되었습니다.")
    }
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
    carMoveOrStop(carnames[i],randomNumber());
  }
}

function randomNumber() {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
  return randomNumber;
}