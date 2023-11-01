import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor(name) {
    this.name = name;
  }
  async play() {
    await this.start();
    this.run();
  }

  async start() {
    try {
      const carName = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );
      const carNameList = carName.split(',')
      console.log(carNameList[0])
    } catch (error) {
      // reject 되는 경우
      for(let i=0;i<length(carNameList);i++){
        if(!isNaN(carNameList[i])){
          throw "[ERROR] 값이 비어있습니다."
        }
        if(length(carNameList[i])>5){
          throw "[ERROR] 5자리 이하의 값만 입력해주세요"
        }
      }
    }
  }
  run() {
    // this.randomNumber();
    // this.inputNumber();
    // this.checkNumber();
  }
}
const app = new App();
app.play();

export default App;
