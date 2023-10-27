import { MissionUtils,Console } from "@woowacourse/mission-utils";

class App {
  constructor(){
    this.cars = new Map();
    this.try = 0;
    this.max = 0;//최대 이동
  }

  async play() {

    const carInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    this.carInit(carInput)
    
    const tryInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    this.checkTryNumber(tryInput);
    this.try = Number(tryInput)
    this.racing();

    //최종 결과
    this.result();
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
    if(Number(number)===0){
      throw new Error("[ERROR] 1이상의 숫자를 입력해주세요.")
    }
  }

  /**
   * 레이싱 진행
   * @returns 
   */
  racing(){
    if(this.try===0) return;

    Console.print("실행 결과")
    this.cars.forEach((value,key)=>{
      const number = MissionUtils.Random.pickNumberInRange(0, 9);
      //4이상이면 이동
      if(number>=4){
        this.cars.set(key,value+1);
        this.max = Math.max(value+1,this.max)
      }
      this.printCar(key);
    })

    this.try--;
    this.racing();
  }

  /**
   * 현재 자동차의 상태 출력
   */
  printCar(name){
    let num = this.cars.get(name);
    
    //n번 반복
    Console.print(`${name} : ${"-".repeat(num)}`);
  }

  /**
   * 최종 결과
   */
  result(){
    let result = [];
    this.cars.forEach((value,key)=>{
      if(this.max===value){
        result.push(key);
      }
    })

    Console.print(`최종 우승자 : ${result.join(", ")}`);
  }

}

export default App;
