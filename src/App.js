import { Console, Random } from "@woowacourse/mission-utils";

const NAME_PROMPT = "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)";
const NUMBER_PROMPT = "시도할 횟수는 몇 회인가요?";
const MOVING_RESULT = "실행 결과";
const MOVE = "-";
const ERROR_PROMPT = "[ERROR] 잘못된 형식입니다.";

class App {
  /** 자동차 이름, 횟수 입력 */
  nameAndNumberInput = async () => {
    // 이름 입력
    Console.print(NAME_PROMPT);
    let nameInput = await Console.readLineAsync();

    // 횟수 입력
    Console.print(NUMBER_PROMPT);
    let numberInput = await Console.readLineAsync();

    // 입력값 검증
    if (this.hasDuplicateName(nameInput) || !this.isNumeric(numberInput)) throw new Error(ERROR_PROMPT);
    // this.isValidInput(nameInput, numberInput);

    nameInput = nameInput.toString().split(",");

    return [nameInput, numberInput];
  }

  /** 이름 중복 검증 함수 */
  hasDuplicateName = (input) => {
    const result = input.split(",").map(name => name.trim());
    const uniqueNames = new Set(result);

    return result.length !== uniqueNames.size;
  }

  /** 숫자 검증 함수 */
  isNumeric = (input) => {

    if (typeof input != "string") return false;
    return !isNaN(input) && !isNaN(parseFloat(input));
  }

  /** 무작위 값을 생성해 전진 여부 확인 */
  isMoveForward = (namesArray) => {
    let movingList = [];

    for (let i = 0; i < namesArray.length; i++) {
      let randomNum = Random.pickNumberInRange(0, 9);
      // 랜덤값이 적절한지 검증하는 코드 추가

      // if (randomNum >= 4) movingList[i] = true;
      // if (randomNum < 4) movingList[i] = false;

      randomNum >= 4 ? movingList[i] = true : movingList[i] = false;
    }

    return movingList;
  }

  /** 전진 결과 출력 */
  getResult = (namesArray, resultArray) => {
    Console.print(MOVING_RESULT);

    for (let i = 0; i < namesArray.length; i++) {
      Console.print(`${namesArray[i]} : ${MOVE.repeat(resultArray[i])}`);
    }
  }


  async play() {
    let [nameList, count] = await this.nameAndNumberInput();

    for (let i = 0; i < count; i++) {
      let moveCount = this.isMoveForward(nameList);
      this.getResult(nameList, moveCount);
    }
  }
}

export default App;
