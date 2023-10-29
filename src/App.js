import {Console} from "@woowacourse/mission-utils";

class App {
  async play() {
    const cars = await this.getCars()

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


}

export default App;
