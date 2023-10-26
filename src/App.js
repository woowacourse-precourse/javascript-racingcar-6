import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  checkUserCarNames(userCarNames) {
    const userCarNamesArray = userCarNames.split(',');
    userCarNamesArray.forEach((element) => {
      if(element.length > 5) throw new Error('[ERROR] 자동차 이름은 5자 이하로 작성해주세요.');
    });
  }

  async play() {
    const userCarNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    this.checkUserCarNames(userCarNames);
  }
}

export default App;
