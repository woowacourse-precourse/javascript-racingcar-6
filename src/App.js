import { Console } from "@woowacourse/mission-utils";

const NAME_PROMPT = "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)";

class App {
  /** 자동차 이름, 횟수 입력 
   * param: -
  */
  nameAndNumberInput = async () => {
    Console.print(NAME_PROMPT);
    let nameInput = await Console.readLineAsync();
    nameInput = nameInput.toString().split(",");
    Console.print("시도할 횟수는 몇 회인가요?");
    let numberInput = await Console.readLineAsync();

    return [nameInput, numberInput];
  }

  /** 이름 중복 테스트 */
  hasDuplicateName = (input) => {
    const result = input.split(",").map(name => name.trim());
    const uniqueNames = new Set(result);

    return result.length !== uniqueNames.size;
  }

  /** 입력값 테스트 */
  isValidInput = (stringInput, ) => {
    const input = stringInput;

    describe("문자열 테스트", () => {
      test("이름 입력값의 쉼표(,) 구분 및 중복값 확인", () => {

        expect(this.hasDuplicateName(input)).toBe(True);
      })
    });

    describe("숫자 테스트")

  }


  async play() {
    let [nameList, count] = await this.nameAndNumberInput();
  }
}

export default App;
