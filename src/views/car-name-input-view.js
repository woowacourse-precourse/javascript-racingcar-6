import { MissionUtils } from "@woowacourse/mission-utils";

const message = {
  carNamesQuestion: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
};

class CarNameInputView {
  async getCarNames() {
    const carNames = await MissionUtils.Console.readLineAsync(message.carNamesQuestion);

    return carNames;
  }
}

export default CarNameInputView;
