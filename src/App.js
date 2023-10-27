import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constant/message";
import { ERROR } from "./constant/error";

class App {
  async play(){}

async getNameOfCar(){
  const carName = await MissionUtils.Console.readLineAsync(MESSAGE.NAME);
  const arrayCarName = carName.spilt(",")
  this.attemptNumber(arrayCarName);
}
async attemptNumber(arrayCarName){
  const tryNumber = await MissionUtils.Console.readLineAsync(MESSAGE.NUMBER);
  this.gameReady(arrayCarName,tryNumber);
}

// 각 자동차 이름 객체 만들고 시도 횟수 에러 점검
gameReady(arrayCarName,tryNumber){
  if(isNaN(parseInt(tryNumber))===false){throw new Error(ERROR.NUMBER);}
  if(parseFloat(tryNumber) !== parseInt(tryNumber)) {throw new Error(ERROR.INTEGER);}  
  const objectCarName = new Object()
  arrayCarName.forEach((a,i) => {
    objectCarName[a] = 0;
  });
}


randomNumber(){
  const processNumber = MissionUtils.Random.pickNumberInRange(0,9)
  return processNumber;
}

}

export default App;
