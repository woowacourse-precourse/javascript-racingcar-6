import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carObj = {};
  }
  
  async play() {
    const carInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    this.handleCarName(carInput);
    const tryInput = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const tryNumber = this.handleTryNumber(tryInput);
    this.race();
  }

  race() {
    MissionUtils.Console.print(`실행 결과`)
    for(let i=0; i<tryInput; i++) {
      this.oneTurn();
    }
    const MVP = this.selectMVP();
    const resultString = MVP.join(", ");
    MissionUtils.Console.print(`\n최종 우승 : ${resultString}`) 
  }

  selectMVP() {
    let max = 0;
    let arr = [];
    for(const key of this.carObj) {
      if(this.carObj[key].length > max) {
        max = this.carObj[key].length;
        arr = [];
        arr.push(key);
      } else if(this.carObj[key].length === max) {
        arr.push(key);
      }
    }
    return arr;
  }

  oneTurn() {
    for(const car of this.carObj) {
      oneTurnEachCar(car); //전역변수에 각 자동차 전진여부에 따라 - 붙임    
      MissionUtils.Console.print(`${car} : ${this.carObj[car]}`)
    }
    MissionUtils.Console.print(``);
  }

  oneTurnEachCar(car) {
    const carRandomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if(carRandomNumber >= 4) {
      this.carObj[car].concat("-"); 
    }
  }

  handleCarName(input) {
    try {
      const arr = input.split(",");
      arr.forEach(e=>{
        this.carObj[e] = ""; //객체 초기화
        if(e.length>6) throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.")
      })
      return arr;
    } catch(error) {
      console.error(error.message);
      throw error;      
    }
  }

  handleTryNumber(input) {
    try {
      console.log(typeof(input)) //
      if(typeof(input)==='number') {
        return Number(input)
      } else throw new Error("[ERROR] 횟수는 숫자여야 합니다. ")
    } catch(error) {
      console.error(error.message);
      throw error;      
    }
  }

  

  
}

export default App;
