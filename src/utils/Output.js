import { Console } from "@woowacourse/mission-utils";

const Output = {
  racingResult() {
    Console.print();
  },
  winner(nameList) {
    Console.print('최종 우승자 : ', nameList.map((name) => name).join(', '));
  },
}

export default Output;