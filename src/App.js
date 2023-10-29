import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  userInput;
  
  //User 입력부분
  async getUserInput() {
    const inputValue = await MissionUtils.Console.readLineAsync('경주 할 자동차 이름(이름은 쉼표(,)기준으로 구분)');
    this.userInput = inputValue.split(',');
    return this.checkUserInput(this.userInput);
  }

  checkUserInput(userInput) {
    if(userInput.some((value)=>value == '')) throw new Error('[ERROR] 입력값이 없습니다.');
    if(userInput.some((value)=>value.length>5)) throw new Error('[ERROE] 자동차 이름은 5자 이하로만 입력해주세요.');
    MissionUtils.Console.print(this.userInput);
  }



  async play() {
    this.getUserInput();
  }
}

const app = new App();
app.play();


export default App;
