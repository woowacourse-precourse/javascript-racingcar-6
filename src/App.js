import { MissionUtils } from "@woowacourse/mission-utils";
import getNameInput from './components/getNameInput.js';
import getCountInput from "./components/getCountInput.js";
import randomPlay from "./components/randomPlay.js"

class App {
  async play() {
    const inputCars = await getNameInput();
    const inputCount = await getCountInput();
    MissionUtils.Console.print('');
    MissionUtils.Console.print('실행 결과');
    for (let index = 0; index < inputCount; index++) {
      // foreach를 사용하면 포문 안에서 비동기를 동기적으로 사용 불가
      // for of를 활용하여 해결
      for (const car of inputCars) {
        await randomPlay(car);
      }
      MissionUtils.Console.print('');
    }
  }
}

export default App;
