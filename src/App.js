import { Random, Console } from "@woowacourse/mission-utils";
import { MESSAGE, ERROR } from "./common/text.js";

const MAX_LENGTH = 5;
const MIN_LENGTH = 1;

class App {
  async play() {
    const carArr = await makeCar();

    const move = await inputMoveCount();
    moveNum(carArr);

    Console.print(`${MESSAGE.GAME_PRINT}`);
    repeatPrint(move, carArr);
    finalPrint(carArr);
  }
}
// 1. n개의 자동차 생성
const makeCar = async () => {
  let name = "";

  let nameArr = [];
  try {
    name = await Console.readLineAsync(`${MESSAGE.GAME_START}`);
  } catch (error) {
    return console.error(error.message);
  }
  // 유효성 검사

  if (!name) {
    throw new Error(`${ERROR.NAME_NULL}`);
  }
  nameArr = name
    .trim()
    .split(",")
    .map((name) => [name.trim(), ""]);

  let validName = await validationName(nameArr);
  if (validName) {
    return nameArr;
  } else if (validName === "length") {
    throw new Error(`${ERROR.NAME_LENGTH}`);
  } else {
    throw new Error(`${ERROR.NAME_COMMA}`);
  }
};

// 2. 자동차 생성 입력값에 대한 유효성 검사
const validationName = async (nameArr) => {
  if (nameArr.length === 1) {
    throw new Error(`${ERROR.NAME_COMMA}`);
  } else {
    nameArr.forEach((el, index) => {
      if (el.length >= `${MAX_LENGTH}` || el.length < `${MIN_LENGTH}`) {
        throw new Error(
          `${ERROR.NAME_LENGTH} ${index + 1}번째요소에 대한 에러`
        );
      }
    });
  }
  return true;
};

// 3. 몇번이동할지 입력받기
const inputMoveCount = async () => {
  let count = 0;
  try {
    count = await Console.readLineAsync(`${MESSAGE.MOVE_COUNT}`);
  } catch (error) {
    console.error(error.message);
  }
  // 유효성 검사
  let validCount = await validationCount(count);
  if (validCount) {
    return count;
  } else {
    throw new Error(`${ERROR.COUNT}`);
  }
};
// 4. 이동 입력값 유효성 검토
const validationCount = async (count) => {
  // console.log("이동", count);

  if (isNaN(count)) {
    throw new Error(`${ERROR.COUNT}`);
  }
  return true;
};

// 5. 이동할 수 있는지 판단하는 번호 생성
const moveNum = (carArr) => {
  for (let i = 0; i < carArr.length; i++) {
    let num = Random.pickNumberInRange(0, 9);

    // 점수가 4이상일때만 "-" 추가 해주는
    if (num >= 4) {
      carArr[i][1] += "-";
    }
  }
};

// 6. 실행결과 출력
const printResult = (carArr) => {
  carArr.map((car) => {
    Console.print(`${car[0]} : ${car[1]}`);
  });
  Console.print("\n");
};

// 7. 이동 입력값만 반복하기
const repeatPrint = (move, carArr) => {
  let cnt = 0;
  while (move > cnt) {
    moveNum(carArr);
    printResult(carArr);
    cnt++;
  }
};

// 8. 최종결과 출력
const finalPrint = (carArr) => {
  let highestNum = Math.max(...carArr.map((car) => car[1].length));

  const carNames = carArr
    .filter((car) => car[1].length === highestNum)
    .map((car) => car[0])
    .join(", ");
  Console.print(`${MESSAGE.FINAL_RESULT} ${carNames}\n`);
};

export default App;

const app = new App();
app.play();
