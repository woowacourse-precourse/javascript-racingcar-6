import { Random, Console } from "@woowacourse/mission-utils";
import { MESSAGE, ERROR } from "./common/text.js";

class App {
  async play() {
    const CAR_NAME = await makeCar();
    console.log("다음거");

    // 3. 몇번 이동하는지 입력받기
  }
}
// 1. n개의 자동차 생성
const makeCar = async () => {
  try {
    let name = await Console.readLineAsync(`${MESSAGE.GAME_START}`);
    let nameArr = name.trim().split(",");

    let validName = await validationName(nameArr);
    if (validName) {
      return true;
    } else if (validName === "length") {
      throw new Error(`${ERROR.NAME_LENGTH}`);
    } else {
      throw new Error(`${ERROR.NAME_COMMA}`);
    }
  } catch (error) {
    console.error(error.message);
  }
};

// 2. 자동차 생성 입력값에 대한 유효성 검사
const validationName = async (nameArr) => {
  console.log("ghkrdls", nameArr.length);
  // const errors = [];
  if (nameArr.length === 1) {
    throw new Error(`${ERROR.NAME}`);
  } else {
    nameArr.forEach((el, index) => {
      if (el.length >= 5 || el.length <= 1) {
        throw new Error(
          `${ERROR.NAME_LENGTH} ${index + 1}번째요소에 대한 에러`
        );
      }
    });
  }
  return true;
};

export default App;

const app = new App();
app.play();
