import { MissionUtils } from "@woowacourse/mission-utils";

const print = (message) => MissionUtils.Console.print(message);
const question = async (message) => MissionUtils.Console.readLineAsync(message);

class App {
  #status = "idle";

  #cars = [];

  #round = null;

  async play() {
    this.#transition("setting");
  }

  async #transition(status) {
    this.#status = status;
    await this.#transitionEffect();
  }

  async #transitionEffect() {
    switch (this.#status) {
      case "idle": {
        break;
      }
      case "setting": {
        const namesInput = await question("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const roundInput = await question("시도할 횟수는 몇 회인가요?\n");

        print(namesInput);
        print(roundInput);
        break;
      }
      case "start": {
        break;
      }
      case "finish": {
        break;
      }
      default: {
        break;
      }
    }
  }
}

export default App;
