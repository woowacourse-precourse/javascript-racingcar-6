import { Console } from "@woowacourse/mission-utils";

class App {

  async play() {
    await this.getCarName();
  }

  async getCarName() {
    const inputName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    return this.sanitizeCarName(inputName);
  }

  sanitizeCarName(inputName) {
    const sanitizedName = inputName.split(',').map(name => name.trim());
    return sanitizedName;
  }
}

const app = new App();
app.play();

export default App;
