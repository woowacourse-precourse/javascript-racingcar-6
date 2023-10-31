import { Console } from "@woowacourse/mission-utils";

const Input = {
  async readInputRaceCarName(callback) {
    try {
      const input = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      callback(input);
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default Input;
