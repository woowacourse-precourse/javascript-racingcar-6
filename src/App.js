import * as MissionUtils from "@woowacourse/mission-utils";
class App {
  async play() {
    const getCarNameInput = async() => {
      const carName = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n')
      return carName.split(',')
    };
    const carNameArr = await getCarNameInput();
  }
}

export default App;
