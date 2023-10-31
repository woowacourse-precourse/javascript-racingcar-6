import { Console, Random } from "@woowacourse/mission-utils";
import { checkLength, checkSeparator, checkIsNumber } from "./validation.js";

class PlayRacingGame {
  play() {
    this.getName();
  }

  async getName() {
    const input = await Console.readLineAsync("경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n");

    if (checkSeparator(input)) {
      const names = input.split(",");

      names.map((ele) => {
        try {
          checkLength(ele);
        } catch (e) {
          console.error(e);
        }
      });

      this.racing(names);
    } else {
      checkLength(input);
    }
  }

  async getNumber() {
    const num = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    checkIsNumber(num);

    return Number(num);
  }

  async racing(names) {
    const number = await this.getNumber();
    Console.print("\n");
    const cnt = new Array(names.length).fill(0);

    Console.print("실행 결과");
    for (let i = 0; i < number; i++) {
      for (let j = 0; j < names.length; j++) {
        let randomNumber = this.makeRandomNumber();

        if (randomNumber >= 4) {
          cnt[j] += 1;
        }
      }
      this.printCnt(names, cnt);
    }
  }

  makeRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  printCnt(names, cnt) {
    for (let i = 0; i < names.length; i++) {
      Console.print(`${names[i]} : ${"-".repeat(cnt[i])}`);
    }

    Console.print("\n");
  }
}

export default PlayRacingGame;
