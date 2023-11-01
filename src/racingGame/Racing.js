import { MissionUtils } from "@woowacourse/mission-utils";
import {NAME, DISTANCE} from "../constants/scoreStorage.js"
import { MESSAGE } from "../constants/message.js";

class Racing {

  async racingStart(carNameArray, racingNumber) {
    await MissionUtils.Console.print(MESSAGE.result);

    const scoreStorage = this.#makeScoreStorage(carNameArray); // 이름별 누적거리 저장을 위한 2차원배열 생성

    for (let i = 1; i <= racingNumber; i++) {
      this.#eachRacing(scoreStorage);  // 각 차수별 레이싱 진행
      this.#printScore(scoreStorage) // 누적거리 출력
    }

    return scoreStorage;
  }

  #makeScoreStorage(carNameArray) {
    const scoreStorage = [];
    scoreStorage.push(carNameArray);  // 첫 번째 행에 이름 저장 scoreStorage[NAME]
    scoreStorage.push(Array(carNameArray.length).fill(0)) // 두 번째 행에 누적거리저장 scoreStorage[DISTANCE]
    return scoreStorage;
  }

  #eachRacing(scoreStorage) {
    scoreStorage[DISTANCE].forEach((e, index) => {
      let isMove = this.#isMove() // 전진여부확인메소드
      scoreStorage[DISTANCE][index] += isMove;
    })
  }

  #isMove() {
    let randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) return true;
    else return false;
  }

  #printScore(scoreStorage) {
    scoreStorage[NAME].forEach((name, index) => {
      let distance = this.#showDistanceWithHyphen(scoreStorage[DISTANCE][index]);
      MissionUtils.Console.print(`${name} : ${distance} `);
    })
    MissionUtils.Console.print('');
  }

  #showDistanceWithHyphen(distanceNumber) {
    let distance = "";
    for (let i = 1; i <= distanceNumber; i++) {
      distance += "-";
    }
    return distance;
  }

}
export default Racing;