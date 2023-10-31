import { Console } from "@woowacourse/mission-utils";

export class Prompt {
  static async getString(Message) {
    return await Console.readLineAsync(Message);
  }

  static async getNumber(Message) {
    return Number(await Console.readLineAsync(Message))
  }

  static print(Message) {
    Console.print(Message)
  }
}
