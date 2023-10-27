import { MissionUtils } from '@woowacourse/mission-utils';
import ERROR from './error.js';




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
    // 쉼표를 기준으로 5자 이하인지 체크 - 쉼표를 기준으로 5자 이상인것 오류
    const carList = userCarListInput.split(',');

    this.checkInvalidCarName(carList);
    console.log("this.checkInvalidCarName(carList);", this.checkInvalidCarName(carList))
  }

  // 사용자가 입력한 차들의 이름이 입력 기준을 만족하는지 체크하는 함수 집합
  checkInvalidCarName(inputCarList){
    this.ckeckLength(inputCarList);
    this.checkLastName(inputCarList);
    return inputCarList;
  }

  // 고차 함수를 사용한 car length 비교
  ckeckLength(inputCarList){
    inputCarList.forEach(car => {
      if (car.length >= 5) {
        throw new Error(ERROR.OVERSIZE_CAR_NAME);
      }
    });
    return inputCarList;
  }

  // 정규 표현식을 사용한 글자 체크 마지막 자리를 제외한 문자열에 숫자가 포함되어 있다면 오류 ex sm5 k6 
  checkLastName(inputCarList){
    const regex = /\d/;
    inputCarList.forEach(car => {
      if (regex.test(car.slice(0,car.length - 1))) {
        throw new Error(ERROR.INVALID_CAR_NAME);
      }
    });
    return inputCarList;
  }

  

  // 사용자가 원하는 게임 전진 도전 횟수
  async getUserWantMoveCount(){
    const inputCount = await MissionUtils.Console.readLineAsync("몇번");
    console.log(inputCount);
    // 사용자 입력이 숫자인지 체크하는 기능
    if (!(Number(inputCount))){
      throw new Error(ERROR.INVALID_INPUT);
    }
    return inputCount;
  }

  // 




}

export default App;
