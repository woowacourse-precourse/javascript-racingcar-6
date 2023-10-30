import { Random, Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    const carNameInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNameArray = carNameInput.split(",");
    const carProgress = new Array(carNameArray.length).fill(0);
    const playRound = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    function playRacing() {
      for (let round = 0; round < playRound; round++) {
        for (let i = 0; i < carProgress.length; i++) {
          const value = randomValue();
          if (value >= 4) {
            carProgress[i]++;
          }
        }
        console.log(carProgress);
      }
      return carProgress;
    }

    playRacing();

    function randomValue() {
      return Math.floor(Math.random() * 10);
    }
    function printResults(names, progress) {
      for (let i = 0; i < names.length; i++) {
        let progressString = "-".repeat(progress[i]);
        Console.print(`${names[i]} : ${progressString}`);
        console.log(`${names[i]} : ${progressString}`);
      }
    }
  }
}

export default App;
