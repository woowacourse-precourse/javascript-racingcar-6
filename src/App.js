import { GAME_MESSAGES } from './constants/gameMessages.js';
import { inputView } from './ViewController/InputView.js';

class App {
  async play() {
    await this.inputCarNames();
  }

  async inputCarNames() {
    const valueOfCarNames = await inputView.readLine(GAME_MESSAGES.input_car_names);
    console.log('valueOfCarNames : ', valueOfCarNames);
  }
}

export default App;
