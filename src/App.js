import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  parsingInput(input, array) {
    const names = input.split(',');
    for (let name = 0; name < names.length; name++) {
      if(names[name] === ' '){
        throw new Error("[ERROR]");
      }
      array.push(new Car(names[name]));
    }
  }

  checkRound(input) {
    if (/^\D+$/.test(input) 
        || Number(input) <= 0) {
      throw new Error("[ERROR]");
    }
  }

  checkInput(cars){
    for(let i=0; i<cars.leng; i++){
      if(cars[i].name.length > 5){
        throw new Error("[ERROR]")
      }
    }
  }

  printWinner(cars) {

    let winners = [];
    let top = 0;

    for (let i = 0; i < cars.length; i++) {
      if (cars[i].location === top) {
        winners.push(cars[i].name);
      }
      else if (cars[i].location > top) {
        winners.length = 0;
        winners = [cars[i].name];
        top = cars[i].location;
      }
    }

    if(winners.length === 1){
      MissionUtils.Console.print(`최종 우승자 : ${winners[0]}`);
    }
    else if(winners.length > 1){
      MissionUtils.Console.print(`공동 우승자 : ${winners.join(', ')}`);
    }
  }
  
  async play() {
    const CARS = [];
    const USERINPUT = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    this.parsingInput(USERINPUT, CARS);
    this.checkInput(CARS);

    const ROUNDS = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    this.checkRound(ROUNDS);
    
    MissionUtils.Console.print("실행 결과");
    
    for (let round = 0; round < ROUNDS; round++) {
      for (let car = 0; car < CARS.length; car++) {
        
        CARS[car].drive();
      }
    }

    this.printWinner(CARS);
  }
}


class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }

  drive() {
    const RANDOM = MissionUtils.Random.pickNumberInRange(0, 9);

    if (RANDOM >= 4) {
      this.location += 1;
    }

    this.currentLocation();
  }

  currentLocation() {
    let string = '';
    for (let i = 0; i < this.location; i++) {
      string += '-';
    }
    MissionUtils.Console.print(`${this.name} : ${string}`);
  }
  
}



export default App;
