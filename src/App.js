import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
      const carNames = await this.carNameInput();
      const userNumber = await this.numberTimesInput();
      const numberTimes = parseInt(userNumber);
      const result = this.playGame(carNames, numberTimes);
      this.endGame(result);
  }

  async carNameInput() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carUserInput = await Console.readLineAsync("");
    const carName = carUserInput.split(",");
    if (carName.some(name => name.trim() === "" || carName.length <= 1 || carName.length > 5)) {
      throw new Error("[ERROR] 이름이 잘못된 형식입니다.");
    }
    return carName; 
  }

  async numberTimesInput() {
    Console.print("시도할 횟수는 몇 회인가요?");
    const numberUserInput = await Console.readLineAsync("");
    if (!/^\d+$/.test(numberUserInput)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    };
    return numberUserInput; 
  }

  playGame(carNames, numberTimes) {
    const result = []; 
    let recordSave = Array(carNames.length).fill(0); 
    for (let i = 0; i < numberTimes; i++) { 
      const saveResult = carNames.map((carName, index) => { 
        const randomValue = Random.pickNumberInRange(0, 9); 
        const action = randomValue >= 4 ? '-' : ''; 
        if (action === '-') { 
          recordSave[index]++; 
        }
        return { carName, action:'-'.repeat(recordSave[index]) }; 
      });
      result.push(saveResult); 
    }
    return result; 
  }

  endGame(result) {
    for (const saveResult of result) {
      for (const { carName, action } of saveResult) { 
        Console.print(`${carName} : ${action}`);  
      }
    }
    let maxDistance = 0;
    const winners = [];
    const lastRound = result[result.length - 1];
    for (const { action, carName } of lastRound) {
      if (action.length > maxDistance) {
        maxDistance = action.length;
        winners.length = 0;
        winners.push(carName);
      } else if (action.length === maxDistance) {
        winners.push(carName);
      }
    }
    Console.print(`최종 우승자: ${winners.join(', ')}`); 
  }
}

export default App;
