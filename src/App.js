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
    this.race(tryNumber);
  }

  race(num) {
    MissionUtils.Console.print(`실행 결과`)
    for(let i=0; i<num; i++) {
      this.oneTurn();
    }
    const MVP = this.selectMVP();
    const resultString = MVP.join(", ");
    MissionUtils.Console.print(`\n최종 우승 : ${resultString}`) 
  }

  selectMVP() {
    let max = 0;
    let arr = [];
    for(const key in this.carObj) {
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
    for(const car in this.carObj) {
      this.oneTurnEachCar(car); //전역변수에 각 자동차 전진여부에 따라 - 붙임    
      MissionUtils.Console.print(`${car} : ${this.carObj[car]}`)
    }
    MissionUtils.Console.print(``);
    // console.log("2222", this.carObj)
  }

  oneTurnEachCar(car) {
    const carRandomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if(carRandomNumber >= 4) {
      this.carObj[car] += "-";
    }
  }

  handleCarName(input) {
    try {
      const arr = input.split(",");
      // console.log("arr", arr)
      arr.forEach(e=>{
        if(e.length>5) throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.")
        this.carObj[e] = ""; //객체 초기화
      })
      // console.log("1111", this.carObj)
    } catch(error) {
      console.error(error.message);
      throw error;      
    }
  }

  handleTryNumber(input) {
    const parsedInput = Number(input);
    // console.log(typeof(parsedInput)) 
    try {
      if(isNaN(parsedInput) || input==="") {
        throw new Error("[ERROR] 횟수는 숫자여야 합니다. ")
      } else return Number(input)
    } catch(error) {
      console.error(error.message);
      throw error;      
    }
  }
}

export default App;
