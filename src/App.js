import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const playGame = function racingGame(nameArr, count) {
      let nameObj = {};
      for (let i = 0; i < nameArr.length; i++) {
        nameObj[nameArr[i]] = 0;
      }
      for (let i = 0; i < count; i++) {
        nameArr.forEach((num) => {
          nameObj[num] += 1;
        });
        nameArr.forEach((j) => {
          const dashes = "-".repeat(nameObj[j]);
          Console.print(`${j} : ${dashes}`);
        });
      }
    };
  }
}

export default App;
