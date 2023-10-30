import { Console } from "@woowacourse/mission-utils";

const InputCountView = () => {
  return Console.readLineAsync("시도할 횟수는 몇 회인가요?");
};

export default InputCountView;
