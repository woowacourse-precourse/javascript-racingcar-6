import { QUESTION_CAR_NAME } from '../const/Messages';

class CarNameManager {
  constructor() {
    this.members = [];
  }

  inputCarName() {
    Console.print(QUESTION_CAR_NAME);
    const userInput = Console.readLineAsync();
    this.members = userInput.split(',').map((name) => name.trim());
  }

  getCarName() {
    return this.members.join(',');
  }
}

/* const manager = new CarNameManager();
manager.inputCarName();
Console.print(manager.getCarName()); */

export default CarNameManager;
