import { MissionUtils } from "@woowacourse/mission-utils";
import { printMessages } from "./constants";
import {
  generateForwardCount,
  validateCarName,
  validateGetNumber,
} from "./utils";

class App {
  // #1 자동차 이름을 입력받음
  async getCarName() {
    const carList = await MissionUtils.Console.readLineAsync(
      printMessages.GET_CAR_NAMES_MESSAGE
    );
    validateCarName(carList);
    return carList;
  }

  // #2 실행 횟수를 입력받음
  async getTryNumbers() {
    const tryNumber = await MissionUtils.Console.readLineAsync(
      printMessages.TRY_NUMBER_ERROR
    );
    validateGetNumber(tryNumber);
    return tryNumber;
  }

  // #3 getTryNumbers만큼 실행 -> generateForwardCount을 사용
  async forwardCars(carNumArray) {
    const isForward = generateForwardCount();
    if (isForward) {
      carNumArray.map((num) => {
        num++;
      });
    }
    return carNumArray;
  }
  // 출력 함수 따로 빼기
  async raceCar(tryNumber, carListArray, carNumArray) {
    for (let i = 0; i < tryNumber; i++) {
      await MissionUtils.Console.print(
        `${printCar(i, carListArray, carNumArray)} `
      );
    }
    return;
  }
  // #4 각 실행 결과를 출력함
  async printCar(index, carListArray, carNumArray) {
    return `${carListArray[index]} : ${changeNumToDash(carNumArray[index])}`;
  }
  // #5 우승 차량 몇대인지 확인 -> 1대, 2대 이상일 때
  async checkWinners(carNumArray) {}

  async winCar(carCountArray) {
    Math.max(carCountArray);
  }
  // #6 우승 차량 출력
  async printWinCar(carCountArray) {
    await MissionUtils.Console.print(winCar(carCountArray));
  }

  async play() {
    const carListArray = await getCarName();
    const tryNumber = await getTryNumbers();
    // tryNumber만큼의 0요소를 가진 배열을 생성
    const carCountArray = new Array(tryNumber, 0);
    await raceCar(tryNumber, carListArray, carCountArray);
    await checkWinners(carNumArray);
    await printWinCar(winCar());
  }
}

export default App;
