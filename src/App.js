import { Console,Random } from "@woowacourse/mission-utils";
import { Messages } from "./Constants/Messages.js";

class App {
  #carNames = []
  #countFowardMovesForEachCar = [];
  
  
  async play() {
    
    await this.startGame();
  }

  async startGame() {
    await this.createNewName();

    const userInput = await this.userInput();
    Console.print('');

    await this.executionResult(userInput);
    
  }

  async createNewName() {
    Console.print(Messages.INPUT_CARNAME);
    const carNameInput = await Console.readLineAsync('');
    const carNameArr = carNameInput.split(',');

    // 자동차 이름의 길이가 0 또는 5를 초과할 경우 ERROR
    for (let i = 0; i < carNameArr.length; i++){
      if (carNameArr[i].length == 0 || carNameArr[i].length > 5){
        throw new Error(Messages.ERROR_CARNAME_INPUT_WRONG);
      } else {
        this.#carNames.push(carNameArr[i]);
        this.#countFowardMovesForEachCar.push(0);
      }
    }

    // 중복된 이름이 있을 경우 ERROR
    const setCollection = new Set(carNameArr);
    const isDuplicate = setCollection.size < carNameArr.length;
    
    if (isDuplicate){
      throw new Error(Messages.ERROR_CARNAME_INPUT_DUPLICATE_NAME);
    }
    return carNameArr;
  }

  async userInput() {
    Console.print(Messages.INPUT_NUMBER_OF_MOVES);
    const userInput = await Console.readLineAsync('');
    
    if (!Number(userInput)){
      throw new Error(Messages.ERROR_NUMBER_OF_MOVES_INPUT_WORNG);
    }
    return userInput;
  }

  // 0 ~ 9 사이의 숫자 생성
  generateRandomNumber() {
    const randomNumber = Random.pickNumberInRange(0,9);
    return randomNumber;
  }

  executionResult(userInput) {
    Console.print(Messages.EXECUTION_RESULT);

    while (userInput !== 0){
      for (let i = 0; i < this.#carNames.length; i++){
        const randomNumber = this.generateRandomNumber();
        if (this.forwardOrStop(randomNumber)){
          this.#countFowardMovesForEachCar[i]++;
        }
        Console.print(`${this.#carNames[i]} : ${"-".repeat(this.#countFowardMovesForEachCar[i])}`);
      }
      Console.print('')
      userInput--;
    }
  }

  forwardOrStop(randomNumber) {
    if (randomNumber < 4) {
      return false;
    } else {
      return true;
    }
  }

}

const app = new App();
app.play();

export default App;