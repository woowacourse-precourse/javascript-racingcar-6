import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.ERROR = {
      LENGTH : '[ERROR] 이름은 5자 이내로 작성해주세요.',
      INCORRECT_FORMAT :'[ERROR] 이름을 쉼표(,)로 구분해주세요.'

    }
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  printErrorMessage(errorMessage) {
    throw new Error(errorMessage);
  }

  async initializeCars() {
    const pattern = /[.\/-]/;
    const carNames = await this.getCarName();
    const carArray = carNames.split(",");
    const isCorrectName = carArray.every((value) => value.length < 5);

    if(pattern.test(carNames)) this.printErrorMessage(this.ERROR.INCORRECT_FORMAT);
    if(!isCorrectName) this.printErrorMessage(this.ERROR.LENGTH);
  }

  getCarName() {
    const carNames = MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    return carNames;
  }

  async play() {
    this.initializeCars();
  }
}

export default App;
