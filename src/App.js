import { MissionUtils } from '@woowacourse/mission-utils';
import { get } from 'mongoose';

class App {

  constructor() {
  }

  async play() {
    await this.getUserCarListInput();
    await this.getUserWantMoveCount();
  }

  // 사용자가 부여한 자동차 이름들을 받아오는 코드
  async getUserCarListInput(){
    const userCarListInput = await MissionUtils.Console.readLineAsync("차 이름을 입력해주세여");
    const carList = userCarListInput.split(',');
    console.log(carList);
    return carList;
  }

  // 사용자가 원하는 게임 전진 도전 횟수
  async getUserWantMoveCount(){
    const inputCount = Number(await MissionUtils.Console.readLineAsync("몇번"));
    console.log(inputCount);
    return inputCount;
  }




}

export default App;
