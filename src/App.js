import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  async racingCarNameInput(){
     const carNameInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
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
  async play() {
    this.racingCarNameInput();
  }
}

export default App;
