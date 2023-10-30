import { Console } from "@woowacourse/mission-utils";

export class Prompt {
  static async getUserInputString(Message) {
    const USER_INPUT = await Console.readLineAsync(Message);
    return USER_INPUT
  }

  static async getUserInputNumber(Message) {
    const USER_INPUT = await Console.readLineAsync(Message);
    return Number(USER_INPUT)
  }

  static displayMessage(Message) {
    Console.print(Message)
  }

  static outputRaceResults(Cars) {
    Cars.forEach(Car => {
      Console.print(`${Car.name} : ${Car.trackStatus}`)
    });
    Console.print("")
  }
}