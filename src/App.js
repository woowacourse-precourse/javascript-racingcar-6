import { Console } from "@woowacourse/mission-utils";
import { Messages } from "./Constants/Messages.js";

class App {
  async play() {
    Console.print(Messages.INPUT_CARNAME);

    const carNameInput = await Console.readLineAsync('');

    Console.print(Messages.INPUT_NUMBER_OF_MOVES);

    const userInput = await Console.readLineAsync('');
    
    if (!Number(userInput)){
      throw new Error(Messages.ERROR_NUMBER_OF_MOVES_INPUT_WORNG);
    }
  }

  async carName(carNameInput) {
    const carNameArr = carNameInput.split(',');
    const setCollection = new Set(carNameArr);
    const isDuplicate = setCollection.size < carNameArr.length;

    

    // 자동차 이름의 길이가 0 또는 5를 초과할 경우 ERROR
    for (let i = 0; i < carNameArr.length; i++){
      if (carNameArr[i].length == 0 || carNameArr[i].length > 5){
        throw new Error(Messages.ERROR_CARNAME_INPUT_WRONG);
      }
    }
    // 중복된 이름이 있을 경우 ERROR
    if (isDuplicate){
      throw new Error(Messages.ERROR_CARNAME_INPUT_DUPLICATE_NAME);
    }

    return carNameArr;
  }
}

const app = new App();
app.play();

export default App;