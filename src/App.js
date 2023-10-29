import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  carName;
  numOfGame
  
  //User 입력부분
  async getUserInput() {
    this.getCarName(()=>this.getNumber());
  }

  async getCarName(callback) {
    const inputValue = await MissionUtils.Console.readLineAsync('경주 할 자동차 이름(이름은 쉼표(,)기준으로 구분)');
    this.carName = inputValue.split(',');
    if(this.carName.some((value)=>value == '')) throw new Error('[ERROR] 입력값이 없습니다.');
    if(this.carName.some((value)=>value.length>5)) throw new Error('[ERROE] 자동차 이름은 5자 이하로만 입력해주세요.');
    MissionUtils.Console.print(`자동차 이름은 : ${this.carName}`);
    callback();
  }

  async getNumber() {
    const inputValue = await MissionUtils.Console.readLineAsync('시도할 횟수');
    if(isNaN(inputValue)) throw new Error('[ERROR] 숫자만 입력해주세요.')
    if(inputValue == '' || inputValue == 0) throw new Error('[ERROR] 시도할 횟수는 1회 이상이어야합니다.');
    this.numOfGame = inputValue;
    MissionUtils.Console.print(`시도할 회수는 : ${this.numOfGame}회`);
  }

  

  async play() {
    this.getUserInput();
  }
}

const app = new App();
app.play();


export default App;
