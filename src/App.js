import {Console} from "@woowacourse/mission-utils";

class App {
  async play() {
    const cars = await this.getCars()
    const number = await this.getNumber()

  }

  async getCars () {
    const inputCars = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n")
    const cars = inputCars.split(",")
    for (const car in cars){
      if(!/^[a-zA-Z0-9]{1,5}$/.test(car)){
        throw new Error("[ERROR] 올바른 자동차 형식이 아닙니다.")
      }
    }
    return cars
  }

  async getNumber () {
    const inputNum = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    if(!/[0-9]/g.test(inputNum)){
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.")
    }
    return +inputNum
  }





}

export default App;
