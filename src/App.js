import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  
  #TRY_COUNT;

  async racingCarNameInput(){
     await MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
     const carNameInput = await MissionUtils.Console.readLineAsync("");
     if(!this.checkCarNameValidation(carNameInput))
     {
      throw new Error("[ERROR] 이름은 5자 이하만 가능합니다.");
     }
  }
  checkCarNameValidation(carNameInput)
  {
    const carNames = carNameInput.split(',');
    return carNames.every( (carName)=> carName.length < 6)
  }
  async racingTryInput(){
    await MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
    const carTryInput = await MissionUtils.Console.readLineAsync("");
    if(this.checkCarTryValidation(carTryInput))
    {
      throw new Error("[ERROR] 횟수는 숫자만 입력 가능합니다.");
    }
    this.#TRY_COUNT=carTryInput;
  }
  checkCarTryValidation(carTryInput){
    return isNaN(parseInt(carTryInput));
  }
  async doRace(){
    await MissionUtils.Console.print("실행결과");
    for(let i=0;i<this.#TRY_COUNT;i++)
    {
      this.moveCar();
    }
  }
  moveCar(){

  }
  async play() {
    await this.racingCarNameInput();
    await this.racingTryInput();
    this.doRace();
  }
}

export default App;
