import { MissionUtils,Console } from "@woowacourse/mission-utils";

class App {
  constructor(){
    this.cars = new Map();
    this.try = 0;
  }

  async play() {

    const carInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    this.carInit(carInput)

    const tryInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    this.try = Number(tryInput)

  }

  carInit(input){
    //,로 구분
    let tmps = input.split(",");

    //cars에 입력
    tmps.forEach(ele => {
      this.cars.set(ele,0);
    });

  }
}

export default App;
