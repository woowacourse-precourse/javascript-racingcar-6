import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  parsingInput(input, array) {
    const names = input.split(',');
    for (let name = 0; name < names.length; name++) {
      array.push(new Car(names[name]));
    }
  }

  checkRound(input) {
    if (/^\D+$/.test(input)) {
      throw new Error("[ERROR]");
    }
  }
  
  async play() {
    const CARS = [];
    const USERINPUT = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    this.parsingInput(USERINPUT, CARS);
    
    const ROUNDS = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    this.checkRound(ROUNDS);
  }
}


export default App;
