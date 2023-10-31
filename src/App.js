import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #RACING_CAR_LIST=[];
  #TRY_COUNT;
  async racingCarNameInput(){
     await MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
      const carNameInput = await MissionUtils.Console.readLineAsync("");
      const carNames = carNameInput.split(',');
     if(!this.checkCarNameValidation(carNames))
     {
      throw new Error("[ERROR] 이름은 5자 이하, 맨끝에 쉼표(,)가 올 수 없습니다.");
     }
     this.initializeCarList(carNames)
  }
  initializeCarList(racingCarNames){
    racingCarNames.forEach( (carName)=>{
      this.#RACING_CAR_LIST.push({
        carName : carName,
        state : ''
      })
    })
  }
  checkCarNameValidation(carNames)
  {
    return carNames.every( (carName)=> carName.length < 6 && carName !=='')
  }
  async racingTryInput(){
    await MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
    this.#TRY_COUNT = await MissionUtils.Console.readLineAsync("");
    if(this.checkCarTryValidation(this.#TRY_COUNT))
    {
      throw new Error("[ERROR] 횟수는 숫자만 입력 가능합니다.");
    }
  }
  checkCarTryValidation(carTryInput){
    return isNaN(parseInt(carTryInput));
  }
  async doRaceStart(){
    await MissionUtils.Console.print("실행결과");
    for(let i=0;i<this.#TRY_COUNT;i++)
    {
      this.doRace();
      this.getCarState();
      await MissionUtils.Console.print('');
    }
  }
  doRace()
  {
    this.#RACING_CAR_LIST.forEach( (Car)=>{
      this.moveCar(Car)
    })
  }
  moveCar(Car){
    if(MissionUtils.Random.pickNumberInRange(0, 9) >=4)
    {
      Car.state += '-';
    }
  }
  getCarState(){
    this.#RACING_CAR_LIST.forEach( async(Car)=>{
      await MissionUtils.Console.print(`${Car.carName} : ${Car.state}`);      
    } )
  }

  async play() {
    await this.racingCarNameInput();
    await this.racingTryInput();
    this.doRaceStart();
  }
}

export default App;
