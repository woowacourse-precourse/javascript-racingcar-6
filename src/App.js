import { Console, Random } from "@woowacourse/mission-utils";

class App {
  /** 자동차 이름, 횟수 입력 
   * param: -
  */
  nameAndNumberInput = async () => {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    let nameInput = await Console.readLineAsync();
    nameInput = nameInput.toString().split(",");
    Console.print("시도할 횟수는 몇 회인가요?");
    let numberInput = await Console.readLineAsync();

    return [nameInput, numberInput];
  }
  async play() {
    let [nameList, count] = await this.nameAndNumberInput();
  }
}

export default App;
