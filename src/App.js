import { MissionUtils } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";

class Car {

  constructor(name) {
    this.name = name;
    this.count = 0;
  }

  plusCount() {
    this.count = this.count + 1;
  }
}

class App {

  async play() {
    const ObjectList = await this.getCarName();
    const NUMBER = await this.userTryNumber();

    Console.print('\n실행 결과');

    for (let i =0; i < NUMBER; i++){
      this.getRandomNumber(ObjectList);
    }

    Console.print(this.finalWinner(ObjectList));

    return;
  }

  async getCarName() {

    let carName = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');

    carName = carName.trim().split(',');
    carName.forEach(element => {
      if(element.includes(" ") || !isNaN(element)) {
        throw new Error("[ERROR]");
      }
    });

    const OBJECT_LIST = [];
    carName.forEach((element, index) => {
      OBJECT_LIST[index] = new Car(element);
    });

    
    return OBJECT_LIST;
  }

  async userTryNumber() {

    let answer = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    if (isNaN(answer)) throw new Error("[ERROR]");

    answer = Number(answer);

    return answer;
  }

  getRandomNumber(ObjectList) {

    for (let j = 0; j < ObjectList.length; j++) {
      let random = MissionUtils.Random.pickNumberInRange(0, 9);

      if (random >= 4) {
        ObjectList[j].plusCount();
      }
    }
    this.printCar(ObjectList);

    return;
  }

  printCar(ObjectList) {

    for(let i=0; i<ObjectList.length; i++){
      Console.print(`${ObjectList[i].name} : ${"-".repeat(ObjectList[i].count)}` );
    }
    Console.print(' ');

    return;
  }

  finalWinner(ObjectList) {

    let rank = Array.from({length: ObjectList.length}, () => 1);
    let winner = '최종 우승자 : ';

    for(let i = 0; i< ObjectList.length; i++){
      rank = this.getRank(ObjectList[i], rank);
    }

    for(let i = 0, flag = 0; i < ObjectList.length; i++) {
      if(rank[i] === 1 && flag === 0) {
        flag = 1;
        winner += ObjectList[i].name;
        continue;
      }
      if(rank[i] === 1 && flag === 1) {
        winner += ', ';
        winner += ObjectList[i].name;
      }
    }
    
    return winner;
  }
  getRank(ObjectList, rank) {

    for(let j = 0; j< ObjectList.length; j++){
      if(ObjectList.count < ObjectList[j].count) {
        rank++;
      }
    }

    return rank;
  }
}


export default App;
