import { Console } from "@woowacourse/mission-utils";
import App from "../App.js";

export default class InitGame  {
    constructor(){
        this.carList = []
        this.gameCount = 0
    }

    async initCarListAndGameCount() {
        this.carList =  this.validateCarList(await Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
        ));
        this.gameCount= this.validateGameCount(
            await Console.readLineAsync(
                "시도할 횟수는 몇 회인가요?\n"
        ))     
    }

    validateCarList(carList) {
        if (carList.length === 0) {
          throw new Error(
            "[ERROR] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능합니다."
          );
        }
    
        carList = carList.split(",");
    
        if (carList.some((car) => car.length > 5 || car.includes(" "))) {
          throw new Error("[ERROR] 이름은 공백없이 5자 이하만 가능합니다.");
        }
        return carList
      }
     validateGameCount(gameCount) {

        if (isNaN(gameCount)) {
          throw new Error("[ERROR] 입력받은 숫자가 잘못된 형식입니다.");
        }

        return gameCount
      }
}