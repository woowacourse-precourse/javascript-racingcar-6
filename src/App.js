import { Console } from "@woowacourse/mission-utils";

class App {
  cars = [];

  async play() {
    await this.getCarNames()
    
  }
  
  async getCarNames() {
    const CAR_NAMES = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ")
    this.validateCarNames(CAR_NAMES)
  }

  validateCarNames(names) {
    if(names === "") {   
      throw new Error("[Error] 자동차 이름을 입력해주세요")
    }
    names = names.split(",");

    const DUPLICATE_NAME = new Set();
    const INVALID_REGEX = /[^a-zA-Z0-9가-힣]+/ 

    for (const name of names) { 
      if (name.trim() !== name ) {
        throw new Error("[Error] 이름에 중복을 제거해주세요")
      }
      if (name.length > 5) { 
        throw new Error("[Error] 자동차의 이름은 5글자 이하로 적어주세요")
      }
      if (DUPLICATE_NAME.has(name)) { 
        throw new Error("[Error] 중복된 자동차 이름이 있습니다.");
      }
      if (INVALID_REGEX.test(name)) { 
        throw new Error("[Error] 이름에 특수문자를 제거해주세요.");
    }
      DUPLICATE_NAME.add(name);
    }
    
    this.cars = names;
  }

}


export default App;
