import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carNames = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    if (carNames.split(",").some((name) => name.trim().length > 5)) {
      throw new Error("[ERROR] 자동차 이름은 최대 5자만 가능합니다.");
    }
    const repeatNumber = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    if (Number.isNaN(Number(repeatNumber))) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    MissionUtils.Console.print("실행 결과");
    const carNameArray = carNames.split(",");
    const carObjects = carNameArray.map((name) => ({ [name.trim()]: 0 }));

    for (let i = 0; i < repeatNumber; i++) {
      for (const carObject of carObjects) {
        for (const carName in carObject) {
          this.generateRandomNumber(carObject);
          const ResultNumber = this.repeatDash(carObject, carName);
          MissionUtils.Console.print(carName + " : " + ResultNumber);
        }
      }
      MissionUtils.Console.print("");
    }
    let winCarArr = [];
    let maxValue = 0;

    for (const carObject of carObjects) {
      for (const carName in carObject) {
        const advanceValue = carObject[carName];
        if (advanceValue > maxValue) {
          winCarArr = [];
          winCarArr.push(carName);
          maxValue = advanceValue;
        } else if (advanceValue === maxValue && !winCarArr.includes(carName)) {
          winCarArr.push(` ${carName}`);
        }
      }
    }
    MissionUtils.Console.print("최종 우승자 : " + winCarArr);
  }

  generateRandomNumber(carObject) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (randomNumber > 3) {
      for (const carName in carObject) {
        carObject[carName]++;
      }
    }
    return carObject;
  }

  repeatDash(carObject, carName) {
    let ResultNumber = "";
    for (let i = 0; i < carObject[carName]; i++) {
      ResultNumber = ResultNumber.concat("-");
    }
    return ResultNumber;
  }
}

export default App;
