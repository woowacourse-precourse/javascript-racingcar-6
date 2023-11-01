import { Console, Random } from "@woowacourse/mission-utils";
import { Car } from "./class";

class App {
  async play() {
    const racers = await this.getRacer();
    const times = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    if(isNaN(times))  throw new Error("[ERROR] 시도 횟수는 숫자 형식만 가능합니다.")

    Console.print("\n실행결과");
    this.doRace(racers, times);
    this.EndRace(racers);
  }

  async getRacer() {
    const racers = (await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n")).split(",");
    if(racers.filter(el=>el.length>5).length>0)  throw new Error("[ERROR] 자동차 이름은 5자 이하로만 입력할 수 있습니다.");
    return racers.map(el=>new Car(el));
  }

  doRace(racers, times) {
    for(let i=0;i<times;i++) {
      racers.forEach(car=>{
        car.tryMoveForward();
        car.printCurrentPosition();
      })
      Console.print("");
    }
  }

  EndRace(racers) {
    const maxLen = racers.reduce((acc,curr)=>Math.max(acc, curr.length), -1);
    Console.print("최종 우승자 : "+racers.filter((racer)=>racer.length===maxLen).map(car=>car.name).join(", "));
  }
}

export default App;
