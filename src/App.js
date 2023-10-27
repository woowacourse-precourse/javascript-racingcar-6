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

  // 사용자가 입력한 차들의 이름이 입력 기준을 만족하는지 체크하는 기능
  // 입력값에 띄어쓰기가 있다면 오류를 반환하려 했지만 람보르기니 우라칸 같은 차도 존재하기에 제외
  checkInvalidCarName(inputCarList){
    this.checkSpace(inputCarList);
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
    const forCheckNumber = /\d/;
    inputCarList.forEach(car => {
      if (forCheckNumber.test(car.slice(0,car.length - 1))) {
        throw new Error(ERROR.INVALID_CAR_NAME);
      }
    });
    return inputCarList;
  }

  // 차 이름 중간에는 공백이 존재할 수 있다고 생각함 하지만 첫자리와 마지막 자리는 그렇지 않기에 오류처리 or 공백을 없애줄까 고민중
  checkSpace(inputCarList){
    const forCheckSpace = /\s/;
    inputCarList.forEach(car => {
      console.log(`${car}끝자리 체크`, car, car.slice(car.length - 1, car.length), "끝자리");
      if (forCheckSpace.test(car.slice(0,1))){
        throw new ERROR("입력하신 차종들중 첫자리에 공백이 존재하는 차가 있습니다.")
      }
      if (forCheckSpace.test(car.slice(car.length-1, car.length))) {
        throw new ERROR("입력하신 차종들중 끝자리에 공백이 존재하는 차가 있습니다.")
      }
    });
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
