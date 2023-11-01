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
  carNameValidation(carName);
  Console.print("시도할 횟수는 몇 회인가요?");
  const inputNumber = await Console.readLineAsync("");
  tryValidation(inputNumber);
  const carDict = {};
  for (let i = 0; i < carName.length; i++) {
    const item = carName[i];
    carDict[i] = { name: item, score: 0 };
  }

  gamePlay(inputNumber, carDict);
}

function gamePlay(inputNumber, carDict) {
  Console.print("");
  Console.print("실행 결과");
  for (let i = 0; i < inputNumber; i++) {
    randomNumber(carDict)
  }
  gameResult(carDict)

}

function randomNumber(carDict) {
  for (let i = 0; i < Object.keys(carDict).length; i++) {
    const pickNumber = Random.pickNumberInRange(0, 9);
    if (pickNumber >= 4) {
      carDict[i]["score"] += 1
    }
    Console.print(carDict[i]["name"] + " : " + ("-".repeat(carDict[i]["score"])));
  }
  Console.print("")
}

function gameResult(carDict) {
  let winScore = 0
  for (let i = 0; i < Object.keys(carDict).length; i++) {
    if (carDict[i]["score"] > winScore) {
      winScore = carDict[i]["score"]
    }
  }
  const winCarName = [];
  const keysOfcarDict = Object.keys(carDict)
  const key = keysOfcarDict.filter((key) => carDict[key]["score"] === winScore);
  if (key.length === 1) {
    Console.print("최종 우승자 : " + carDict[key]["name"])
  }
  else {
    for (let i = 0; i < key.length; i++) {
      winCarName.push(carDict[key[i]]["name"])
    }
    let strTemp = winCarName.join(', ')
    Console.print("최종 우승자 : " + strTemp)
  }
}

function carNameValidation(carName) {
  for (let i = 0; i < carName.length; i++) {
    if (carName[i].length > 5 || !carName[i].trim()) {
      throw new Error("[ERROR] 자동차의 이름은 5자리 이하여야 합니다.");
    }
  }
}

function tryValidation(number) {
  if (isNaN(number)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}


export default App;

const app = new App();
app.play();