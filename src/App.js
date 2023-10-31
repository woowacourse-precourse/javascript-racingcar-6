import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {}
  async play() {
    try {
      const setGameOfUser = await this.setGameOfUser();
      if (setGameOfUser === false)
        throw new Error("[ERROR] 입력값이 잘못되었습니다.");

      const result = this.startGame(
        setGameOfUser.carList,
        setGameOfUser.gameNumber
      );
      console.log(result);
      this.endGame(result);
    } catch (error) {
      throw new Error("[ERROR] 입력값이 잘못되었습니다.");
    }
  }

  async setGameOfUser() {
    const setName = await this.setGameOfUser_setName();
    if (setName === false) return false;

    const setGameNum = await this.setGameOfUser_setGameNum();
    if (setGameNum === false) return false;

    return { carList: setName, gameNumber: setGameNum };
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
      if (this.setGameOfUser_validationName(carList) === false) return false;
      return carList;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  }
  setGameOfUser_validationName(carListArr) {
    let invalid = false;
    if (carListArr.length < 2) invalid = true;
    carListArr.forEach((element) => {
      if (element.length > 5) invalid = true;
    });

    if (invalid === true) return false;
    return true;
  }
  async setGameOfUser_setGameNum() {
    Console.print("시도할 횟수는 몇 회인가요?(1~10회로 제한)");
    let gameNumber = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?(1~10회로 제한)"
    );
    gameNumber = Number(gameNumber);
    if (isNaN(gameNumber)) return false;
    if (gameNumber > 10 && gameNumber < 1) return false;
    if (gameNumber % 1 !== 0) return false;
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

      //[
      //   {name:"foo", location:"-"}
      // ]

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
