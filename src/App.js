import { Random, Console } from '@woowacourse/mission-utils';
import ERROR from './error.js';
import { stat } from 'fs';

class App {

  constructor() {
    this.inputCount;
    this.carList;
    this.gameStatus = [];
    this.finalScore = [];
  }

  async play() {
    await this.totalGameLogic();
  }

  async totalGameLogic() {
    await this.gameSetting();
    this.gameMainLogic();
  }

  async gameSetting(){
    await this.getUserCarListInput();
    await this.makeForCheckGameStatus(this.carList);
    await this.getUserWantMoveCount();
  }

  // 게임 메인 로직 - 전진할지 멈출지 판단하고 사용자가 원하는 횟수만큼 시도
  gameMainLogic() {
    for (let i = 0; i < this.inputCount; i++) {
      this.decideMove();
    }
    this.checkScore();
    this.awards();
  }

  // 전진할지 멈출지 판단하는 함수
  decideMove() {
    this.gameStatus.forEach((car, index) => {
      const randomNumber = this.makeRandomNumber();
      if (randomNumber >= 4) {
        this.gameStatus[index] += "-";
      }

      // 일관된 데이터 유형을 유지하기 위해 gamestatus는 2차원 배열인데 randomNumber가 4 이상일 때는 문자열로 변환되고
      // 4 미만일때 그냥 넘겨버리면 만약 한번도 전진을 못한경우 문자열이 아닌 배열 그대로 존재해버림 2차원 배열 안에 문자열과 배열이 존재해버려
      // 31라인 checkScore 함수의 .split(":")에서 오류 [car1:--,[car2:],car3:--]
      if (randomNumber < 4) {
        this.gameStatus[index] += "";
      }
      Console.print(this.gameStatus[index]);
    });
  }

  checkScore() {
    this.gameStatus.forEach(car => {
      const score = car.split(":")[1];
      this.finalScore.push(Number(score.length));
    });
  }

  // 전진 또는 정지를 위한 랜덤 넘버 생성
  makeRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  awards() {
    const maxScore = Math.max(...this.finalScore);

    // 공동 우승 찾기
    const winner = [];

    // for문 지양 고차함수 지향 - > 변경 완료
    this.finalScore.forEach((score,index) => {
      if (score === maxScore){
        console.log("score",score);
        winner.push(this.gameStatus[index].split(":")[0].trim());
      }
    })

    if (winner.length === 1) {
      Console.print(`최종 우승자 : ${winner[0]}`);
    }

    if (winner.length !== 1) {
      Console.print(`최종 우승자 : ${winner.join(", ")}`);
    }

  }  



  // 사용자가 부여한 자동차 이름들을 받아오는 코드
  async getUserCarListInput(){
    const userCarListInput = await Console.readLineAsync("차 이름을 입력해주세여");
    // 쉼표를 기준으로 5자 이하인지 체크 - 쉼표를 기준으로 5자 이상인것 오류
    this.carList = userCarListInput.split(',');
    this.checkInvalidCarName(this.carList);
    return this.carList;
  }

  // 사용자가 입력한 차들의 이름이 입력 기준을 만족하는지 체크하는 기능
  // 입력값에 띄어쓰기가 있다면 오류를 반환하려 했지만 람보르기니 우라칸 같은 차도 존재하기에 제외
  checkInvalidCarName(inputCarList){
    this.checkSpace(inputCarList);
    this.ckeckLength(inputCarList);
    this.checkLastName(inputCarList);
    return inputCarList;
  }

  // 차 이름 중간에는 공백이 존재할 수 있다고 생각함 하지만 첫자리와 마지막 자리는 그렇지 않기에 오류처리
  checkSpace(inputCarList) {
    const forCheckSpace = /\s/;
    inputCarList.forEach(car => {

      if (forCheckSpace.test(car.slice(0, 1))) {
        throw new ERROR(ERROR.INVALID_INPUT_FIRST)
      }

      if (forCheckSpace.test(car.slice(car.length - 1, car.length))) {
        throw new ERROR(ERROR.INVALID_INPUT_FINAL)
      }
    });
  }

  // 고차 함수를 사용한 car length 비교
  ckeckLength(inputCarList){
    inputCarList.forEach(car => {
      if (car.length >= 5) {
        throw new Error(ERROR.OVERSIZE_CAR_NAME);
      }
      // 사용자가 차 이름을 여러개 입력후 , 로 입력을 끝내면 빈 문자열이 차 리스트에 생김
      if (car.length == 0) {
        throw new Error(ERROR.INVALID_CAR_NAME_SPACE);
      }
    });
  }

  // 정규 표현식을 사용한 글자 체크 마지막 자리를 제외한 문자열에 숫자가 포함되어 있다면 오류 ex sm5 k6 
  checkLastName(inputCarList) {
    const forisInvalidInput = /\d/;
    inputCarList.forEach(car => {
      if (forisInvalidInput.test(car.slice(0, car.length - 1))) {
        throw new Error(ERROR.INVALID_CAR_NAME);
      }
    });
  }
  
  // 사용자가 원하는 게임 전진 도전 횟수
  async getUserWantMoveCount(){
    this.inputCount = await Console.readLineAsync("몇번");

    // 사용자 입력이 숫자인지 체크하는 기능
    this.isInvalidInput(this.inputCount);
    return this.inputCount;
  }

  // 전진 도전 횟수에서 입력값이 숫자인지 체크
  isInvalidInput(inputCount){
    if (!(Number(inputCount))) {
      throw new Error(ERROR.INVALID_INPUT);
    }

    if (this.checkSpace(inputCount)){
      throw new Error(ERROR.INVALID_INPUT_SPACE);
    }
  }

  checkSpace(input){
    const forCheckSpace = /\s/;
    return forCheckSpace.test(input);
  }

  // 게임 진행하는 동안 차들의 상태를 저장하기 위한 배열 생성 - 현재는 이름과 결과를 한번에 저장하려고함
  makeForCheckGameStatus(userinput) {
    this.gameStatus = Array.from({ length: userinput.length }, () => []);

    this.gameStatus.forEach((status,index) => {
      status.push(`${userinput[index]} : `);
    })

    return this.gameStatus;
  }
}

export default App;
