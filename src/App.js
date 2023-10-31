import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    //자동차 이름 입력받기
    const carNameUserInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    //쉼표 기준 분리
    const carNames = carNameUserInput.split(",");

    //5자 이하인지 확인하기
    const isNameUpper5 = carNames.every((carName) => carName.length() > 5);

    //5자 이상이면 예외 처리
  }
}

export default App;
