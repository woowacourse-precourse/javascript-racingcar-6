import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.CAR_NAMES_ARRAY = [];
    this.ATTEMPTS = 0;
    this.FORWARD_COUNT = [];
    this.WINNERS=[];
  }

  async play() {
    await this.getUserInput();
    this.showResult();
  }

  async getUserInput() {
    const CAR_NAMES = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n');
    this.CAR_NAMES_ARRAY = CAR_NAMES.split(',');
    this.FORWARD_COUNT = new Array(this.CAR_NAMES_ARRAY.length).fill(0); //자동차의 개수만큼 
    this.ATTEMPTS = parseInt(await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'));
  
    this.CAR_NAMES_ARRAY.forEach((car)=> {
      if(car.length > 5){
        throw new Error("[ERROR] 자동차이름은 5자 이하만 가능합니다.");
      } 
    })

    if(isNaN(this.ATTEMPTS)) {
      throw new Error("[ERROR] 숫자 형식이 아닙니다.");
    }
  }

  getRandomNumber() {
    this.FORWARD_COUNT.forEach((count, i) => {
      const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(0, 9);
      RANDOM_NUM >= 4 && this.FORWARD_COUNT[i]++;
    })
  }

  displayGameProgress() {
    this.FORWARD_COUNT.forEach((count, i) => {
      MissionUtils.Console.print(`${this.CAR_NAMES_ARRAY[i]} : ${'-'.repeat(count)}\n`);
    })
    MissionUtils.Console.print('\n');
  }

  selectWinner(){
    const max = Math.max(...this.FORWARD_COUNT); //최대로 전진한 수
    this.FORWARD_COUNT.forEach((count,i)=>{
      count === max && this.WINNERS.push(this.CAR_NAMES_ARRAY[i]);//최대로 전진한 수애 해당하는 자동차들을 뽑음
    })
  }

  showResult() {
    MissionUtils.Console.print('실행 결과\n');
    while (this.ATTEMPTS > 0) {
      this.ATTEMPTS--;
      this.getRandomNumber()
      this.displayGameProgress();
    }
    this.selectWinner();
    MissionUtils.Console.print(`최종 우승자 : ${this.WINNERS.join()}\n`);
  }
}

export default App;
