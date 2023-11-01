import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}

  async getCarNames(){
    const carNamesList = [];
    const carNames = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    carNames.split(',').forEach((carname) => {
      if(carname.length > 5) throw new Error("[ERROR] 5자 이하 이름이 아닙니다.");
      carNamesList.push(carname);
    });
    return carNamesList;
  }

  async getNumber(){
    const number = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    if(number === 0 || number === null || Number.isNaN(number)) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    return number;
  }
}

export default App;
