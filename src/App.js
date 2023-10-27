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
    this.checkTryNumber(tryInput);
    this.try = Number(tryInput)

  }

  carInit(input){
    //,로 구분
    let tmps = input.split(",");

    //cars에 입력
    tmps.forEach(ele => {
      this.checkCar(ele);
      this.cars.set(ele,0);
    });

  }

  /**
   * 자동차 이름 유효성, 중복 확인
   * 1~5글자, 영문,숫자만 허락
   * @param {*} name 
   */
  checkCar(name){
    //유효성 확인
    const re = new RegExp("^[A-Za-z0-9]{1,5}$")
    if(!re.test(name)){
      throw new Error("[ERROR] 이름 형식을 맞춰주세요.");
    }

    //중복 확인
    if(this.cars.has(name)){
      throw new Error("[ERROR] 이름이 중복되었습니다.")
    }
  }

  /**
   * 트라이횟수 유효성 확인
   * 0이상의 자연수만 가능
   * @param {*} number 
   */
  checkTryNumber(number){
    const re = new RegExp("^[0-9]+$")
    if(!re.test(number)){
      throw new Error("[ERROR] 숫자 형식을 맞춰주세요.");
    }
  }

}

export default App;
