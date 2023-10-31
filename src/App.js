import { MissionUtils } from "@woowacourse/mission-utils";
import { getCarName, getRoundNum } from "./Computer.js";
import Car from "./Car.js";

class App {
  async play() {
    let carNames = await getCarName();
    let round = await getRoundNum();

    MissionUtils.Console.print("\n실행 결과");

    //종민이에게 물어보기
    // for (let car of carNames) {
    //   car = new Car(car);
    //   // console.log(car);
    //   // console.log(car.resultString);
    // }

    let cars = carNames.map((name) => new Car(name));

    for (let i = 0; i < round; i++) {
      for (let car of cars) {
        // car = new Car(car);
        car.resultString = car.runOrNot(car.resultString);
        MissionUtils.Console.print(`${car.name} : ${car.resultString}`);
        // console.log(car);
      }
      MissionUtils.Console.print(`\n`);
    }

    MissionUtils.Console.print("최종 우승자 : pobi, jun");
  }
}

const myApp = new App(); // App 클래스의 인스턴스 생성
myApp.play(); // play 메소드 실행

export default App;
