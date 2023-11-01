import { Console } from "@woowacourse/mission-utils";
import { Messages } from "../Constants/Messages.js";
import vaildateNameOfCar from "../validates/validateNameOfCar.js";
import vaildateNumberOfMoves from "../validates/validateNumberOfMoves.js";
import Car from "./Car.js";

class RacingCarGame {

    constructor() {
      this.cars = [];
      this.numberOfAttempt = 0;
    }
  
    async startGame() {
      this.cars = await this.createCars();
      this.numberOfAttempt = await this.inputNumberOfAttempt();
      this.outputExecutionResult(this.numberOfAttempt);
      this.printWinner();
    }
  
    async createCars() {
      const inputNamesOfCars = (await Console.readLineAsync(Messages.INPUT_CARNAME)).split(',');
      vaildateNameOfCar(inputNamesOfCars);
      const carInstances = inputNamesOfCars.map((name) => new Car(name));
      return carInstances;
    }
  
    async inputNumberOfAttempt() {
        const userInput = await Console.readLineAsync(Messages.INPUT_NUMBER_OF_MOVES);
        vaildateNumberOfMoves(userInput)
    
        return userInput;
    }
  
    outputExecutionResult(userInput) {
        Console.print(Messages.EXECUTION_RESULT);
        while (userInput > 0) {
            this.printExecutionProcess();
            Console.print('');
            userInput--;
        }
    }
  
    printExecutionProcess() {
      for (const car of this.cars) {
        const moved = car.move();
        Console.print(`${car.name} : ${Messages.MOVING_DISTANCE.repeat(car.movingDistance)}`);
      }
    }
  
    printWinner() {
      const maxMovingDistance = Math.max(...this.cars.map((car) => car.movingDistance));
      const winners = this.cars.filter((car) => car.movingDistance === maxMovingDistance);
      const winnerNames = winners.map((car) => car.name).join(', ');
      Console.print(`${Messages.FINAL_WINNER}${winnerNames}`);
    }
  }
  
  export default RacingCarGame;