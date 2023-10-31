import { Console } from "@woowacourse/mission-utils";
import { validCarInput, validNumberiNPUT } from "./ValidInput";
import move from "./Move";
import result from "./Result";
import winner from "./Winner";
import { MESSAGE } from "./Message";

class App {
  async play() {
    Console.print(MESSAGE.INPUT_CAR_NAME)
    const CARS = await validCarInput()
    Console.print(MESSAGE.INPUT_NUMBER)
    let TRYS = await validNumberiNPUT()
    Console.print(TRYS)

    while(TRYS > 0){
      CARS.forEach((car)=>{
        if(move){
          car.num++
        }
      })
      TRYS--
      result(CARS)
    }
    
    const WINNER = winner(CARS)
    Console.print(MESSAGE.WINNER + WINNER)
  }
}

export default App;
