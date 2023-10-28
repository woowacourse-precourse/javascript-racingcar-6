import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const enterCarName = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n"
    );

    const carName = enterCarName.split(",");

    const verifyNameLength = carName.map((i) => i.length > 5);

    if (verifyNameLength.includes(true) === true) {
      throw new Error(
        "[ERROR] 입력한 이름이 5자를 초과하였습니다. 게임을 다시 시작해주세요."
      );
    }

    const numberOfRounds = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? \n"
    );

    const verifyNumber = /^[0-9]+$/;

    if (verifyNumber.test(numberOfRounds) === false) {
      MissionUtils.Console.print(
        "게임 횟수에는 숫자만 입력할 수 있습니다. 다시 입력해주세요."
      );
    }

    const randomNumber = MissionUtils.Console.pickNumberInRange(1, 9);
  }

  forwardCar() {}
}

export default App;
