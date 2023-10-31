import { Random, Console } from "@woowacourse/mission-utils";
import { MESSAGE, ERROR } from "./common/text.js";

const MAX_LENGTH = 5;
const MIN_LENGTH = 1;

class App {
  async play() {
    const carArr = await makeCar();
    console.log("차", carArr);

    const move = await inputMoveCount();
    console.log("다음거", move);

    // 3. 몇번 이동하는지 입력받기
  }
}
// 1. n개의 자동차 생성
const makeCar = async () => {
  let nameArr = [];
  try {
    let name = await Console.readLineAsync(`${MESSAGE.GAME_START}`);
    nameArr = name.trim().split(",");
  } catch (error) {
    return console.error(error.message);
  }
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
  console.log("ghkrdls", nameArr.length);
  // const errors = [];
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
  try {
    let count = await Console.readLineAsync(`${MESSAGE.MOVE_COUNT}`);
    // let nameArr = name.trim().split(",");

    let validCount = await validationCount(count);
    if (validCount) {
      return true;
    } else {
      throw new Error(`${ERROR.COUNT}`);
    }
  } catch (error) {
    console.error(error.message);
  }
};
// 4. 이동 입력값 유효성 검토
const validationCount = async (count) => {
  console.log("이동", count);

  if (isNaN(count)) {
    throw new Error(`${ERROR.COUNT}`);
    return false;
  }
  return true;
};

// // 이동할 번호 생성
// const moveNum = () =>

// // 5. 횟수에 맞춰서 랜덤값 생성
// const repeatPrint = (move) => {
//   let cnt = 0;
//   while (move >= cnt) {

//   }

// }

export default App;

const app = new App();
app.play();
