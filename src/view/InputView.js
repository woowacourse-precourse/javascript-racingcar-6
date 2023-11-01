import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async inputRacingCars(callback) {
    await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    ).then((input) => {
      callback(input);
    });
  },
  async inputRacingTryingNumber(callback) {
    await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n").then(
      (input) => {
        callback(+input);
      }
    );
  },
};

export default InputView;
