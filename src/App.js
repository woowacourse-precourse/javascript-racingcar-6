import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_RESULT } from "./constant/printMessage";
import inputCarNames from "./user/inputCarNames";
import inputTryCount from "./user/inputTryCount";
import { RANDOM_MAX, RANDOM_MIN } from "./constant/variable";

class App {
  /**
   * 게임 플레이
   */
  async play() {
    await this.gameStart();
  }

  /**
   * 게임 시작
   * 게임에 필요한 값 입력
   * 입력한 값으로 라운드 진행
   * 결과 출력
   */
  async gameStart() {
    const carNames = await inputCarNames();
    const tryCount = await inputTryCount();
    let gameProcess = new Array(carNames.length).fill("");

    MissionUtils.Console.print(GAME_RESULT);

    const gameRound = this.runGame(carNames, gameProcess, tryCount);
    MissionUtils.Console.print(gameRound);

    const gameWinner = this.gameWinner(carNames, gameProcess);
    MissionUtils.Console.print(`최종 우숭자 : ${gameWinner}`);
  }

  /**
   * 게임 동작
   * @param {*} carNames , 단위로 전달받은 자동차 이름 배열
   * @param {*} gameProcess 게임 진행 값을 저장하기 위한 배열
   * @param {*} tryCount 게임 시도 횟수
   * @returns 게임 진행이 저장된 배열 반환
   */
  runGame(carNames, gameProcess, tryCount) {
    let gameResult = "";
    for (let i = 0; i < tryCount; i++) {
      gameResult = this.playRound(carNames, gameProcess, gameResult);
    }
    return gameResult;
  }

  /**
   * 게임 라운드 진행
   * @param {*} carNames , 단위로 전달받은 자동차 이름 배열
   * @param {*} gameProcess 게임 진행 값을 저장하기 위한 배열
   * @param {*} gameResult 라운드마다 게임 결과를 담는 문자열
   * @returns 전체 라운드 게임 결과 값 반환
   */
  playRound(carNames, gameProcess, gameResult) {
    for (let i = 0; i < carNames.length; i++) {
      const randomNumber = this.generateRandomNumber();
      if (randomNumber >= 4) {
        gameProcess[i] += "-";
      }
      gameResult += `${carNames[i]} : ${gameProcess[i]} \n`;
    }
    return gameResult;
  }

  /**
   * 게임 우승자
   * @param {*} carNames , 단위로 전달받은 자동차 이름 배열
   * @param {*} gameProcess 게임 진행 값을 저장하기 위한 배열
   * @returns 하이픈이 가장 많은 순위로 우승자 이름 문자열로 반환
   */
  gameWinner(carNames, gameProcess) {
    let maxHyphenCount = 0;
    const winnerCars = [];

    for (let i = 0; i < gameProcess.length; i++) {
      const hyphenCount = (gameProcess[i].match(/-/g) || []).length;

      if (hyphenCount > maxHyphenCount) {
        maxHyphenCount = hyphenCount;
      }

      if (hyphenCount === maxHyphenCount) {
        winnerCars.push(carNames[i]);
      }
    }

    return winnerCars.join(", ");
  }

  /**
   * 랜덤 숫자 생성
   * @returns 랜덤 숫자 반환
   */
  generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);
  }
}

export default App;
