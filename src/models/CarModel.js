import { Console, Random } from "@woowacourse/mission-utils";

class Car{
  constructor(name){
    this.name = name;
    this.movingLength = 0;
  }
  getName(){
    return this.name;
  }
  getMovingLength(){
    return this.movingLength;
  }
  async move(){
    // 3-1 자동차가 이동 가능한지 확인
    const randomMoveNumber = await Random.pickNumberInRange(0,9);
    
    // 3-2 자동차 이동
    if(this.canMoveCar(randomMoveNumber)){
      this.movingLength++;
    }
  }
  canMoveCar(moveNumber){
    return moveNumber >= 4 ? true : false;
  }
}
export {Car}