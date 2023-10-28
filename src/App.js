import { Console, MissionUtils } from "@woowacourse/mission-utils";
async function input(script) {
  const inputValue = await Console.readLineAsync(script);
  return inputValue;
}

async function getCar() {
  let value = await input(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  value = value.split(",");
  value.map((e) => {
    if (e.length > 5) throw Error("[ERROR] 차 이름의 길이가 5 초과입니다.");
  });
  return value;
}
async function getTryNum() {
  const value = await input("시도할 횟수는 몇 회인가요?\n");
  return value;
}
function getRandomNum() {
  const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
  if (randomNum >= 4) return true;
  else if (randomNum < 4) return false;
}
function goOrStay(carName, Go, carGoCount) {
  if (Go == true) carGoCount[carName] += 1; // 4이상이었다면 한칸 앞으로 가기
}
function printGoProgress(carGoCount, car) {
  let max = 0;
  let winner = [];
  car.map((e) => {
    if (max < carGoCount[e]) {
      max = carGoCount[e];
      winner[0] = e;
    }
    Console.print(e);
    Console.print(" : ");
    for (let i = 0; i < carGoCount[e]; i++) Console.print("-");
  });
  car.map((e) => {
    if (max == carGoCount[e] && winner[0] != e) winner.push(e);
  });

  Console.print("최종 우승자 : ");
  winner.map((e, i) => {
    if (i != 0) Console.print(", ");
    Console.print(e);
  });
}

function playGame(tryNum, carGoCount, car) {
  let Go = "";
  for (let i = 0; i < tryNum; i++) {
    for (let j = 0; j < car.length; j++) {
      Go = getRandomNum();
      goOrStay(car[j], Go, carGoCount);
    }
  }
  printGoProgress(carGoCount, car); //각 차의 진행상황 출력하는 코드
}
class App {
  async play() {
    const car = await getCar();
    const tryNum = await getTryNum();
    let carGoCount = {};
    car.map((e) => {
      carGoCount[e] = 0;
    });
    Console.print("\n실행 결과");
    playGame(tryNum, carGoCount, car);
  }
}

export default App;

const app = new App();
app.play();
