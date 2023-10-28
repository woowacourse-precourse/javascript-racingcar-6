import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {}

  async participating_car(){
  let cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
  cars = cars.split(',')
  
  cars.forEach(el => { // 유효성 검사.
    if(el.legnth > 5){
      throw new Error();
    }
  });

  return cars
 }
  
}

export default App;
