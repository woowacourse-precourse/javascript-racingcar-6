import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {}

  async participatingCar(){
  let cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
  cars = cars.split(',')
  
  cars.forEach(el => { // 유효성 검사.
    if(el.legnth > 5){
      throw new Error();
    }
  });

  return cars
 }

 async numberOfMoves(){
  let NumberOfmoves = await Console.readLineAsync('시도할 횟수는 몇 회인가요?')
  // 시도횟수의 제한은 없으며 숫자만 입력 가능하다.
  if(isNaN(NumberOfmoves)){
    throw new Error();
  }

  return NumberOfmoves;
 }
  
}

export default App;
