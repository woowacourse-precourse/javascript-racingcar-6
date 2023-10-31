import { Console, Random } from "@woowacourse/mission-utils";
//코드 스타일 수정사항 
// 7.11(함수 시그니처 공백) / 수정완료
// 7.15 / 수정완료
// 8.4 (화살표함수) /수정완료
// 11.1 (iterator 사용하지 말것) / 수정중
//13.6 /수정완료
//21.1 / 수정완료
//22.1 / 수정완료

class App {
  async play() {
    try {
       const CARS = await this.participatingCar();
       const NUMBEROFCARS = await this.numberOfMoves();
       const result = this.startRacing(CARS, NUMBEROFCARS);
       Console.print("최종 우승자 : "+result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async participatingCar() {
  let cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
  cars = cars.split(',');
  
  cars.forEach((el) => { 
    if(el.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5글자 이하로 입력해주세요');
    }
  });

  return cars;
 }

  async numberOfMoves() {
  let NumberOfmoves = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');

  if(isNaN(NumberOfmoves)) {
    throw new Error('[ERROR] 숫자를 입력해주세요');
  }

  return Number(NumberOfmoves);
 }

  trackingCarsMove(
    moveOfCars, 
    roundRandomNumber,
  ) { 
    roundRandomNumber.forEach((el,idx) => {
      if(el>=4) {
        moveOfCars[idx] += '-';
      }
    })

  return moveOfCars;
 }

  createRoundRandomNumbers(participatingCarsNumber) { 
  let arr = [];

  for(let i=0; i<participatingCarsNumber; i++){
    arr.push(Random.pickNumberInRange(1,9));
  }

  return arr;
}

  winnerSelect(
    participatingCar,
    moveOfCars
  ) { 
     let mostMoves = 0;
     let winners = [];

     moveOfCars.forEach((el) => {
       if(el.length > mostMoves) {
         mostMoves = el.length;
       }
     })

     moveOfCars.forEach((el,idx) => {
       if(el.length === mostMoves) {
         winners.push(participatingCar[idx]);
       }
     })

     return String(winners);
  }

  startRacing(
    participatingCar, 
    numberOfMoves
  ) {
    let moveOfCars = [];
    let roundRandomNumber = [];

    for(let i=0; i<participatingCar.length; i++) {
      moveOfCars.push('');
    }

    for(let i=0; i<numberOfMoves; i++) {  
      roundRandomNumber = this.createRoundRandomNumbers(participatingCar.length);
      moveOfCars = this.trackingCarsMove(moveOfCars, roundRandomNumber);

      participatingCar.forEach((el,idx) => {
        Console.print(el+" : "+moveOfCars[idx]);
      })
    }

    return this.winnerSelect(participatingCar, moveOfCars);
  }
  
}

export default App;
