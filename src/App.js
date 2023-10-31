import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {}
  async play() {
    try {
      const setGameOfUser = await this.setGameOfUser();
      if (setGameOfUser === false)
        throw new Error("[ERROR] 입력값이 잘못되었습니다.");
      console.log("setGameOfUser");
      console.log(setGameOfUser);

      // startGame(setGameOfUser.carList, setGameOfUser.gameNumber);
    } catch (error) {
      console.log("에러발생");
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

  startGame() {}
  startGame_racing() {}
  startGame_printIntermediateResult() {}

  endGame() {}
}

export default App;
