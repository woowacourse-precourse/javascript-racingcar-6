import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const userInputCar = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    /* 1. userInput을 쉼표 기준으로 분리, 유효성 검사, 객체 형태로 만들기 */
    const carsArray = this.processUserInput(userInputCar);
    this.checkCars(carsArray);
    let carsInfo = this.createCarsObject(carsArray);

    /* 2. userInput 시도 횟수 받고, 유효성 검사 */
    const userInputCnt = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    let cnt = this.checkCnt(userInputCnt);

    /* 3. 주어진 cnt만큼 출력 로직 반복하기 */
    MissionUtils.Console.print("\n실행 결과");

    while (cnt > 0) {
      this.playRound(carsInfo);
      this.printRoundResult(carsInfo);
      MissionUtils.Console.print("");
      cnt -= 1;
    }

    /* 4. 우승자 선정 로직 후 출력하기 */
    const gameResult = this.findWinner(carsInfo);
    MissionUtils.Console.print("최종 우승자 : " + gameResult);
  }

  // 자동차 이름 입력값 분해하는 함수
  processUserInput(str) {
    const strToArr = str.split(",");
    return strToArr;
  }

  // 자동차 이름 유효성 검사 함수
  checkCars(arr) {
    arr.forEach((item) => {
      console.log("item", item, item.length);
      if (item.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력해주세요.");
      }
    });
  }

  // 자동차 정보 객체 만들기 함수
  createCarsObject(carsName) {
    let carsObject = new Object();

    carsName.forEach((item) => {
      carsObject[item] = "";
    });
    return carsObject;
  }

  // 사용자 입력 시도 횟수 유효성 검사 함수
  checkCnt(str) {
    const strToInt = Number(str);
    if (isNaN(strToInt)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    return strToInt;
  }

  // 한 턴마다 자동차 주행값 반영하는 함수
  playRound(obj) {
    for (let key in obj) {
      let value = obj[key];
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        value += "-";
        obj[key] = value;
      }
    }
  }

  // 하나의 턴 결과값을 출력하는 함수
  printRoundResult(carObj) {
    for (let key in carObj) {
      MissionUtils.Console.print(key + " : " + carObj[key]);
    }
  }

  // 우승자 판별 함수
  findWinner(resultObj) {
    let maxValue = 0;
    let winnerArray = [];

    for (let key in resultObj) {
      const value = resultObj[key];

      if (value.length > maxValue) {
        maxValue = value.length;
        winnerArray = [key];
      } else if (value.length === maxValue) {
        winnerArray.push(key);
      }
    }
    return winnerArray;
  }
}

export default App;
