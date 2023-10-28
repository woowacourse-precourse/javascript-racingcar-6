import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const names = await this.getInputCarNames();
  }

  async getInputCarNames() {
    const names = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");

    if(!this.isValidNames(names)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능하고, 쉼표로 구분해야 합니다.");
    }
    return names.split(",");
  }

  isValidNames(names) {
    const nameArray = names.split(",");
    
    return nameArray.every(name => name.length > 0 && name.length <= 5);
  }
}


export default App;
