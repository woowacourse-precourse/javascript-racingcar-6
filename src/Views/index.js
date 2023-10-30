import { Console } from "@woowacourse/mission-utils";

class Views {
  printRacingResult(data) {
    Console.print(`${data.el} : ${data.moved}`);
  }

  printWinner(data) {
    Console.print(`최종 우승자 : ${data}`);
  }

  printCustomMessage(message) {
    Console.print(message);
  }

  printRepeatedMessage(message, times) {
    const result = message.repeat(times);

    return result;
  }
}

export default Views;
