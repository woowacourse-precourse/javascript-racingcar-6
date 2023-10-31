import { Console, Random } from "@woowacourse/mission-utils";

// 모든 특수문자를 상수에 저장한다.
const specialCharacters = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;
const specialCharactersExComma =
  /[\{\}\[\]\/?.;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;

async function receiveCarName() {
  const carName = await Console.readLineAsync("");
  const carNameArray = carName.split(",");
  validateCarName(carNameArray);
  return carNameArray;
}

function validateCarName(carNameArray) {
  let uniqueCarName, spaceCarName, specialCharactersCarName, underFiveCharacters;

  for (let count = 0; count < carNameArray.length; count++) {
    uniqueCarName = carNameArray.indexOf(carNameArray[count]) !== count;
    spaceCarName = carNameArray[count].includes(" ");
    specialCharactersCarName = specialCharactersExComma.test(carNameArray);
    underFiveCharacters = carNameArray[count].length>5
    if (uniqueCarName || spaceCarName || specialCharactersCarName || underFiveCharacters)
      throw new Error("[ERROR] 이름이 잘못된 형식입니다.");
  }
}

async function receiveNumber() {
  let tryNumber = await Console.readLineAsync("");
  validateNumber(tryNumber);
  tryNumber = parseInt(tryNumber);

  return tryNumber;
}

function validateNumber(tryNumber) {
  const specialCharacterstryNumber = specialCharacters.test(tryNumber);
  const spacetryNumber = tryNumber.includes(" ");
  if (isNaN(tryNumber) || specialCharacterstryNumber || spacetryNumber)
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
}

function makeDashList(carNameArray) {
  let carDashList = [];
  for (let count = 0; count < carNameArray.length; count++)
    carDashList.push("");
  return carDashList;
}

function randomGo(carNameArray, carDashList) {
  let goOrStop;
  for (let count = 0; count < carDashList.length; count++) {
    goOrStop = "";
    if (Random.pickNumberInRange(0, 9) >= 4) goOrStop += "-";
    carDashList[count] += goOrStop;
    Console.print(carNameArray[count] + " : " + carDashList[count]);
  }

  return carDashList;
}

function startRacing(carNameArray, carDashList, tryNumber) {
  for (let gameRounds = 0; gameRounds < tryNumber; gameRounds++) {
    randomGo(carNameArray, carDashList);
    Console.print("");
  }
  return carDashList;
}

function printResult(carNameArray, carDashList) {
  let winnerIndex = [];
  let winners = [];
  let max = 0;
  let score;
  for (let count = 0; count < carDashList.length; count++) {
    score = carDashList[count].split("-").length - 1;
    if (score >= max) max = score;
  }

  winnerIndex = carDashList
    .map((dash, index) => (carDashList[index].length === max ? index : -1))
    .filter((index) => index !== -1);

  for (let count = 0; count < winnerIndex.length; count++) {
    winners.push(carNameArray[winnerIndex[count]]);
  }
  winners = winners.join(", ");
  Console.print("최종 우승자 : " + winners);
}

class App {
  async play() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    let carNameArray = await receiveCarName();
    let carDashList = makeDashList(carNameArray);
    Console.print("시도할 횟수는 몇 회인가요?");
    const tryNumber = await receiveNumber();
    Console.print("");
    Console.print("실행 결과");
    startRacing(carNameArray, carDashList, tryNumber);
    printResult(carNameArray, carDashList);
  }
}

export default App;
