import { Console } from "@woowacourse/mission-utils";

class CarMoveCount {
  async getMoveCount() {
    return await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }
}

export default CarMoveCount;
