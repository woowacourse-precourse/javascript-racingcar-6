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
  this.errorTry(tryNumber);
  this.gameReady(arrayCarName);
}

// 각 자동차 이름 객체 만들기
gameReady(arrayCarName){
  const count =[];
  const objectCarName = new Object()
  arrayCarName.forEach((a,i) => {
    objectCarName[a] = 0;
    count.push(0);
  });
  this.gameStart(objectCarName, arrayCarName, count);  
}

// 매 게임이 마다 객체에 숫자 랜덤으로 넣고 5이상이면 count에 1 추가 
// 나중에 count가 1인 것들은 print에 -추가
gameStart(objectCarName, arrayCarName, count){
  for(let i = 0; i<arrayCarName.length; i++){
    objectCarName[i] = this.randomNumber;
   if(Object.values(objectCarName)[i]>=5){
      count[i]++
    } 
  }
  this.gamePrint(count)
}

randomNumber(){
  const processNumber = MissionUtils.Random.pickNumberInRange(0,9)
  return processNumber;
}

errorTry(tryNumber){
  if(isNaN(parseInt(tryNumber))===false){throw new Error(ERROR.NUMBER);}

}

gamePrint(){

}

}

export default App;
