import { MissionUtils } from "@woowacourse/mission-utils"; //이거 왜 없다고 하냐..?

class App {
  async play() {
    this.getCarName();

  }

  async getCarName() {
    const carsName = await Console.readLineAsync(`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`);
    let carNameArry = String.carS.split(','); // 배열형태
    
    return carNameArry;
  }

  async getCount() {
    const HOW_MANY_MOVE = await Console.readLineAsync(`시도할 횟수는 몇 회인가요?`);

    return Number(HOW_MANY_MOVE); // 유효성 검사할 때 NaN면 throw ㄱㄱ
  }



}

//for test
new App().playj();
export default App;
