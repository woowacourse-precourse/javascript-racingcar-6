import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constant/message";

class App {
  async play(){}

async getNameOfCar(){
  const carName = await MissionUtils.Console.readLineAsync(MESSAGE.name);
  this.attemptNumber(carName);
}
async attemptNumber(carName){
  const tryNumber = await MissionUtils.Console.readLineAsync(MESSAGE.number);

}






}

export default App;
