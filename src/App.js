import { Console, MissionUtils } from "@woowacourse/mission-utils";

async function input(script) {
  const inputValue = await Console.readLineAsync(script);
  return inputValue;
}

function playGame(tryNum, carGoCount, car) {
  let Go = "";
  let winner = "";
  for (let i = 0; i < tryNum; i++) {
    for (let j = 0; j < car.length; j++) {
      Go = getRandomNum();
      goOrStay(car[j], Go, carGoCount);
    }
    winner = printGoProgress(carGoCount, car); //우승자 받아오기
  }
  Console.print(`최종 우승자 : ${winner}`);
}
async function getCar() {
  // 경주 할 자동차 입력
  let value = await input(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  if (value.includes(",") == false)
    throw Error("[ERROR] 2대 이상의 차를 입력해주세요");
  value = value.split(",");
  value.map((e) => {
    if (e.length > 5) throw Error("[ERROR] 차 이름의 길이가 5 초과입니다.");
  });
  return value;
}

async function getTryNum() {
  // 시도횟수 입력
  const value = await input("시도할 횟수는 몇 회인가요?\n");
  if (isNaN(value) === true) throw Error("[ERROR] 숫자를 입력해 주십시오.");
  else if (value <= 0) throw Error("[ERROR] 0보다 큰 숫자를 입력해 주십시오.");
  return value;
}
function getRandomNum() {
  // 0에서 9 사이에서 무작위 값 추출
  const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
  if (randomNum >= 4) return true;
  else if (randomNum < 4) return false;
}
function goOrStay(carName, Go, carGoCount) {
  // 무작위 값이 4 이상일 경우 전진
  if (Go == true) carGoCount[carName] += 1;
}
function printGoProgress(carGoCount, car) {
  // 현재 진행상황 출력
  let carGoCountForPrint = [];
  let winnerForPrint = "";
  let max = 0;
  let winner = [];
  car.map((e, i) => {
    //e는 차의 이름, i는 index
    if (max < carGoCount[e]) {
      max = carGoCount[e];
      winner[0] = e;
    }

    carGoCountForPrint[i] = "";
    for (let j = 0; j < carGoCount[e]; j++) carGoCountForPrint[i] += "-";
    Console.print(`${e} : ${carGoCountForPrint[i]}`);
  });
  Console.print("");
  car.map((e) => {
    if (max == carGoCount[e] && winner[0] != e) winner.push(e);
  });

  winner.map((e, i) => {
    //우승자가 여러명인 경우 쉼표로 구분하기
    if (i != 0) winnerForPrint += ", ";
    winnerForPrint += e;
  });

  return winnerForPrint;
}

class App {
  async play() {
    const car = await getCar();
    const tryNum = await getTryNum();
    let carGoCount = {}; // 차 이름 : 전진 수
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
