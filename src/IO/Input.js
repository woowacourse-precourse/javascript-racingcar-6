import { Console } from "@woowacourse/mission-utils";

export default class Input {
  async get(query) {
    const input = await Console.readLineAsync(query);
    return input;
  }
}
