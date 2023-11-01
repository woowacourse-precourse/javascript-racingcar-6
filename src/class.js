import { Console, Random } from "@woowacourse/mission-utils";

class Car {

  constructor(name) {
    this.name = name;
    this.length = 0;
  }

  tryMoveForward() {
    const num = Random.pickNumberInRange(0, 9);
    if (num >= 4) this.length++;

    Console.print(`${this.name} : ${"-".repeat(this.length)}`);
  }

}

export class Race {

  constructor() {
    this.racers = [];
    this.tryTimes = 0;
  }

  async getRacer() {
    const racers = (await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n")).split(",").map(racer => racer.trim());
    if (racers.filter(el => el.length > 5).length > 0) throw new Error("[ERROR] 자동차 이름은 5자 이하로만 입력할 수 있습니다.");
    if (racers.length === 0) throw new Error("[ERROR] 경주할 자동차를 입력하지 않았습니다.");
    this.racers = racers.map(el => new Car(el));
  }

  async getTimes() {
    const times = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    if (isNaN(times)) throw new Error("[ERROR] 시도 횟수는 숫자 형식만 가능합니다.");
    if (times.length === 0) throw new Error("[ERROR] 시도할 횟수를 입력하지 않았습니다.");
    this.tryTimes = times;
  }

  doTry() {
    this.racers.forEach(car => {
      car.tryMoveForward();
    })
    Console.print("");
  }

  async doRace() {
    const racers = this.racers;
    const times = this.tryTimes;

    Console.print("\n실행결과");

    for (let i = 0; i < times; i++) {
      this.doTry();
    }

    const first = racers.reduce((acc, curr) => Math.max(acc, curr.length), -1);
    Console.print("최종 우승자 : " + racers.reduce((acc, curr) => {
      if (curr.length === first)acc.push(curr.name);
      return acc;
    }, []).join(", "));
  }
}