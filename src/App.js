import { Random, Console } from '@woowacourse/mission-utils';
import ERROR from './error.js';

class App {

  constructor() {
    this.inputCount;
    this.carList;
    this.gameStatus = [];
    this.finalScore = [];
  }

  async play() {
    await this.mainGameLogic();
  }

  async mainGameLogic() {
    await this.getUserCarListInput();
    await this.makeForCheckGameStatus(this.carList);
    await this.getUserWantMoveCount();
    this.checkGoStop();
    this.checkScore();
    this.awards();
  }

  // 전진 또는 정지를 위한 랜덤 넘버 생성
  makeRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  checkScore(){
    this.gameStatus.forEach(car => {
      const score = car.split(":")[1].trim();
      this.finalScore.push(Number(score.length));
    });
    // console.log("finalScore", this.finalScore);
    // console.log(this.finalScore[0]);
  }

  awards(){
    const maxScore = Math.max(...this.finalScore);
    
    // 공동 우승 찾기
    const winner = [];
    for (let i = 0; i < this.finalScore.length; i++) {
      if (this.finalScore[i] === maxScore){
        winner.push(this.gameStatus[i].split(":")[0].trim());
      }
    }

    console.log(winner);
    console.log("winner length",winner[0],winner.length);
    if (winner.length === 1){
      Console.print(`최종 우승자 : ${winner[0]}`);
    }

    if (winner.length !== 1){
      Console.print(`최종 우승자 : ${winner.join(", ")}`);
    }
    
  }



  checkGoStop(){
    for (let i = 0; i < this.inputCount; i++) {
      this.gameStatus.forEach((car,i) => {
        const randomNumber = this.makeRandomNumber();
        // console.log("randomNumber", randomNumber);
        if (randomNumber >= 4) {
          this.gameStatus[i] += "-";
        }
        Console.print(this.gameStatus[i]);
      });
    
    }
  }

  // 게임 진행하는 동안 차들의 상태를 저장하기 위한 배열 생성 - 현재는 이름과 결과를 한번에 저장하려고함
  // 이름과 결과를 따로 저장하고 출력시에만 같이 출력할까 고민중
  makeForCheckGameStatus(userinput){
    this.gameStatus = Array.from({ length: userinput.length }, () => []);
    for (let i = 0; i < this.gameStatus.length; i++) {
      this.gameStatus[i].push(`${userinput[i]} : `);
    }
    return this.gameStatus;
  }

  // 사용자가 부여한 자동차 이름들을 받아오는 코드
  async getUserCarListInput(){
    const userCarListInput = await Console.readLineAsync("차 이름을 입력해주세여");
    // 쉼표를 기준으로 5자 이하인지 체크 - 쉼표를 기준으로 5자 이상인것 오류
    this.carList = userCarListInput.split(',');
    this.checkInvalidCarName(this.carList);
    console.log("this.checkInvalidCarName(carList)", this.checkInvalidCarName(this.carList));
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
  checkLastName(inputCarList){
    const forCheckNumber = /\d/;
    inputCarList.forEach(car => {
      if (forCheckNumber.test(car.slice(0,car.length - 1))) {
        throw new Error(ERROR.INVALID_CAR_NAME);
      }
    });
  }

  // 차 이름 중간에는 공백이 존재할 수 있다고 생각함 하지만 첫자리와 마지막 자리는 그렇지 않기에 오류처리 or 공백을 없애줄까 고민중
  checkSpace(inputCarList){
    const forCheckSpace = /\s/;
    inputCarList.forEach(car => {
      console.log(`${car}끝자리 체크`, car, car.slice(car.length - 1, car.length), "끝자리");
      if (forCheckSpace.test(car.slice(0,1))){
        throw new ERROR(ERROR.INVALID_INPUT_FIRST)
      }
      if (forCheckSpace.test(car.slice(car.length-1, car.length))) {
        throw new ERROR(ERROR.INVALID_INPUT_FINAL)
      }
    });
  }
  
  // 사용자가 원하는 게임 전진 도전 횟수
  async getUserWantMoveCount(){
    this.inputCount = await Console.readLineAsync("몇번");
    console.log(this.inputCount);
    // 사용자 입력이 숫자인지 체크하는 기능
    this.checkNumber(this.inputCount);
    return this.inputCount;
  }


  checkNumber(inputCount){
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

  
  
}

export default App;
