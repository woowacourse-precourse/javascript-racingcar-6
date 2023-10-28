import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  parsingInput(input, array) {
    const names = input.split(',');
    for (let name = 0; name < names.length; name++) {
      array.push(new Car(names[name]));
    }
  }
  
  async play() {
    const CARS = [];
    const USERINPUT = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    this.parsingInput(USERINPUT, CARS);

  }
}


export default App;
