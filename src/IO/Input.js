import { Console } from "@woowacourse/mission-utils";

export class Input {
  async get(query) {
    const input = await Console.readLineAsync(query);
    return input;
  }
}
