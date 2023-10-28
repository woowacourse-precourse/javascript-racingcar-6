import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  cars = [];
  raceTimes = 0;
  raceResults = [];
  goTimes = {};

  async play() {
    const carNames = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n");
    this.raceTimes = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요? \n");
  }

  async raceCars() {

  }

  goStop() {

  }

  showResults() {

  }

  showWinners() {


  }

  async handleErrors() {

  }
}

const app = new App();
app.play();

export default App;
