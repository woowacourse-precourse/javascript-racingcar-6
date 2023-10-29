import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.distance = '';
  }
}
class StartGame{
  async getCarName(){
    let input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    let nameList = input.split(',');
    let carArray=[];
    nameList.forEach((carName)=>{
      let car = new Car(carName);
      carArray.push(car);
    })
  }
}

class App {
  async play() {}
  
}

export default App;
