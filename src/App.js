import { Random, Console } from "@woowacourse/mission-utils";
import { InputValidator, InputView, OutputView } from "./view";
class App {
  async play() {
    const inputValidator = new InputValidator();
    const inputView = new InputView(inputValidator);
    
  }
}

export default App;

const app = new App();
app.play();
