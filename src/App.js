import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constant/message";
import { ERROR } from "./constant/error";

class App {
  async play(){
    const arrayCarName = await this.getNameOfCar();
    const tryNumber = await this.attemptNumber();
    this.gameReady(arrayCarName, tryNumber);
  }

async getNameOfCar(){
  const getCarName = await MissionUtils.Console.readLineAsync(MESSAGE.NAME);
  const carName = getCarName.split(",");
  carName.forEach((elements) => {
    if(elements.length>5){throw new Error(ERROR.FIVE);}
  })
  return carName;
}
async attemptNumber(){
  const getNumber = await MissionUtils.Console.readLineAsync(MESSAGE.NUMBER);
  const newNumber = parseInt(getNumber);
  if(isNaN(newNumber)){throw new Error(ERROR.NUMBER);}
  return newNumber
}

// 각 자동차 이름 객체 만들기. count는 몇번 전진했는지 세는 변수
gameReady(arrayCarName,tryNumber){
  const count = Array(arrayCarName.length).fill(0);
  const myProgress = Array(arrayCarName.length).fill('');
  const objectCarName = {};
  arrayCarName.forEach((a) => {
    objectCarName[a] = 0;
  });
  for (let i = 0; i < tryNumber; i++){
   this.gameStart(objectCarName, arrayCarName, count, myProgress);  
  }
  this.winner(arrayCarName, count);
}

// 매 게임마다 객체에 숫자 랜덤으로 넣고 5이상이면 count에 - 추가 
async gameStart(objectCarName, arrayCarName, count, myProgress){
  for(let i = 0; i<arrayCarName.length; i++){
    objectCarName[i] = await this.randomNumber();
   if(Object.values(objectCarName)[i]>=5){
      count[i]++;
      myProgress[i] = myProgress[i]+'-'
    } 
    MissionUtils.Console.print(`${arrayCarName[i]} : ${myProgress[i]}`)
  }
}

randomNumber(){
  const processNumber = MissionUtils.Random.pickNumberInRange(0,9)
  return processNumber;
}

winner(arrayCarName, count){
  const maxNumber = Math.max([...count]);
  const arrayWinner =[];
  arrayCarName.forEach((element,index) => {
    if(maxNumber === count[index]){
      arrayWinner.push(element);
    }
  });
  MissionUtils.Console.print(`최종우승자 : ${arrayWinner}`)
}
}
export default App;
