import { Console } from "@woowacourse/mission-utils";

class App {

  async play() {
    await this.getCarName();
  }

  async getCarName() {
    const inputName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    return this.sanitizeCarName(inputName);
  }

  sanitizeCarName(inputName) {
    const sanitizedName = inputName.split(',').map(name => name.trim()).filter(name => name);
    return this.validateCarName(sanitizedName);
  }
  
  validateCarName(sanitizedName) {
    this.#checkMinimumCar(sanitizedName);
    this.#checkLength(sanitizedName);
    this.#checkDuplicate(sanitizedName);
    return sanitizedName;
  }

  #checkMinimumCar(sanitizedName) {
    if (sanitizedName.length < 2) {
      throw new Error("[ERROR] 최소 두 대 이상의 자동차 이름을 입력해주세요.");
    }
  }

  #checkLength(sanitizedName) {
    if (sanitizedName.some(name => name.length > 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.");
    }
  }

  #checkDuplicate(sanitizedName) {
    if (new Set(sanitizedName).size !== sanitizedName.length) {
      throw new Error("[ERROR] 중복되는 자동차 이름이 있습니다.");
    }
  }

  async getRound() {
    const round = parseInt(await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n"), 10);
    return round;
  }
}

const app = new App();
app.play();

export default App;
