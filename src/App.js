import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carsInput =
      await Console.readLineAsync("경주할 자동차 이름을 입력하세요.");
    const cars = carsInput.split(",");
    const carsWithMoveNum = {};
    cars.forEach((player) => {
      carsWithMoveNum[player] = 0;
    });
    const lastCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    let count = 0;
    console.log(cars);
    while (count <= lastCount) {
      cars.forEach((car) => {
        const randomNum = Random.pickNumberInRange(0, 9);
        randomNum >= 4 ? carsWithMoveNum[car]++ : null;
        const printMoveToLine = "-".repeat(carsWithMoveNum[car]);
        Console.print(`${car} : ${printMoveToLine}`);
      });
      Console.print("");
      count++;
    }
  }
}

const app = new App();
app.play();

export default App;
