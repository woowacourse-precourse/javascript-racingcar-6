import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {}
  async play() {
    try {
      const setGameOfUser = await this.setGameOfUser();
      const result = this.startGame(
        setGameOfUser.carList,
        setGameOfUser.gameNumber
      );
      this.endGame(result);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }

  async setGameOfUser() {
    try {
      const setName = await this.setGameOfUser_setName();
      const setGameNum = await this.setGameOfUser_setGameNum();
      return { carList: setName, gameNumber: setGameNum };
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async setGameOfUser_setName() {
    try {
      Console.print(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );
      let carList = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );

      carList = carList.split(",").map((element) => element.trim());

      this.setGameOfUser_validationName(carList);
      return carList;
    } catch (error) {
      throw new Error(error.message);
      // Console.print(error.message);
      // return false;
    }
  }
  setGameOfUser_validationName(carListArr) {
    if (carListArr.length < 2)
      throw new Error("차 리스트가 1개 이하입니다. 2개 이상을 입력해주세요.");

    const carListArrCallback = (element) => {
      if (element.length > 5)
        throw new Error(
          "차 이름이 너무 깁니다. 각 이름은 5자 이하로 해주세요."
        );
    };
    carListArr.forEach(carListArrCallback);
    return;
  }
  async setGameOfUser_setGameNum() {
    Console.print("시도할 횟수는 몇 회인가요?(1~10회로 제한)");
    let gameNumber = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?(1~10회로 제한)"
    );
    gameNumber = Number(gameNumber);

    if (
      isNaN(gameNumber) ||
      gameNumber > 10 ||
      gameNumber < 1 ||
      gameNumber % 1 !== 0
    )
      throw new Error("게임 횟수는 숫자이며 2와 9 사이의 정수이어야 합니다.");
    return gameNumber;
  }

  startGame(carList, gameNumber) {
    const process = carList.map((element) => ({ name: element, location: 0 }));
    Console.print("실행결과");
    for (let valid = 1; ; ) {
      process.forEach((element) => {
        if (Random.pickNumberInRange(1, 10) >= 4) element.location += 1;
      });

      const processToBar = process.map((element) => {
        element.location = "-".repeat(element.location);
        return element;
      });

      let message = "";
      processToBar.forEach((e) => {
        message = message + `${e.name} : ${e.location} \n`;
      });

      Console.print(message);

      if (valid >= gameNumber) break;
      valid++;
    }
    return process;
  }

  endGame(result) {
    const reducerCallback = (a, b) => {
      if (a.location.length >= b.location.length) {
        return a;
      } else {
        return b;
      }
    };
    let maxlocation = result.reduce((a, b) => reducerCallback(a, b));
    let winner = result
      .filter((element) =>
        element.location === maxlocation.location ? true : false
      )
      .map((element) => element.name)
      .join(", ");
    Console.print(`최종우승자 : ${winner}`);
  }
}

export default App;
