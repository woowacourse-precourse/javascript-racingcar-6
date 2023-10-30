import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    gameStart();

  }
}

async function gameStart() {
  Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
  const inputCarName = await Console.readLineAsync("");
  const carName = inputCarName.split(',');
  Console.print(carName.length);
  Console.print("시도할 횟수는 몇 회인가요?");
  const inputNumber = await Console.readLineAsync("");
  const carDict = {};
  for (let i = 0; i < carName.length; i++) {
    const item = carName[i];
    carDict[item] = 0;
  }
  Console.print(carDict);

  // gamePlay(inputNumber, carName);
}

function gamePlay(inputNumber, carName) {
  Console.print("실행 결과");
  let step;
  for (step = 0; step < inputNumber; step++) {
    randomNumber(carName)
  }

}

function randomNumber(carName) {
  let step;
  for (step = 0; step < carName.length; step++) {
    const pickNumber = Random.pickNumberInRange(0, 9);
    Console.print(pickNumber);
  }

}


export default App;

const app = new App();
app.play();