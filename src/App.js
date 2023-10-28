import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  cars = [];
  raceTimes = 0;
  raceResults = [];
  goTimes = {};

  async play() {
    const carNames = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n");
    this.cars = carNames.split(",");
    this.raceTimes = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요? \n");
  
    // 배열 길이 검사를 handleErrors 메소드 호출 이전에 수행
    // if (this.cars.length === 0) {
    //   throw new Error("[ERROR] 자동차 이름을 입력하지 않았습니다.");
    // }

    this.handleErrors(this.cars, this.raceTimes);
    this.raceCars();
  }

  async raceCars() {

  }

  goStop() {

  }

  showResults() {

  }

  showWinners() {


  }

  handleErrors(cars, raceTimes) {
    if (cars.length < 2) {
      throw new Error("[ERROR] 자동차 경주를 시작하기 위해서는 최소 두 대 이상의 자동차가 필요합니다.");
    }

    const uniqueCars = [...new Set(cars)];
    if (cars.length !== uniqueCars.length) {
      throw new Error("[ERROR] 중복된 자동차 이름을 입력하실 수 없습니다.");
    }

    cars.forEach(car => {
      if (!/^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/.test(car)) {
        throw new Error("[ERROR] 자동차 이름은 한글, 숫자, 영문으로만 입력하실 수 있습니다.");
      }  

      if (car.length < 1 || car.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 한 글자 이상 다섯 글자 이하로만 입력하실 수 있습니다.");
      }   
    });

    if (!Number(raceTimes) || Number(raceTimes) < 1 || Number(raceTimes) !== Math.trunc(Number(raceTimes))) {
      throw new Error("[ERROR] 자동차 경주 횟수는 양의 정수만 입력하실 수 있습니다.");
    }
  }
}

// const app = new App();
// app.play();

export default App;
