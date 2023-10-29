import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const carArray = this.handleCarName(carInput);
    const tryInput = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    // const tryNumber = 

  }

  handleCarName(input) {
    try {
      const arr = input.split(",");
      arr.forEach(e=>{
        if(e.length>6) throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.")
      })
      return arr;
    } catch(error) {
      console.error(error.message);
      throw error;      
    }
  }

  handleTryNumber(input) {
    try {
      console.log(typeof(input)) //
      if(input >= 48 && input <= 57) {
        return Number(input)
      } else throw new Error("[ERROR] 횟수는 숫자여야 합니다. ")
    } catch(error) {
      console.error(error.message);
      throw error;      
    }
  }

  

  
}

export default App;
