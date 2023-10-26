import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const racers = await getRacer();
    
  }

  async getRacer() {
    const racers = (await Console.readAsyncLine("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n")).split(",");
    if(racers.filter(el=>el.length>5).length>0)  throw new Error("[Error] 자동차 이름은 5자 이하로만 입력할 수 있습니다.");
    return racers;
  }

  doRace(racers, times) {

  }

  printCurrentRace(racers, length) {

  }

  EndRace(racers, length) {

  }
}

export default App;
