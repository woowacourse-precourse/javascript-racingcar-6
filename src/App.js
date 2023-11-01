import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./message.js";
import { number } from "./TryNumber.js";

class App {
  async play() {
    const carName = await Console.readLineAsync(MESSAGE.RACING_CAR_NAME);
    const carNameArray = carName.split(',');
    const REGEX = /[`~!@#$%^&*()_|+\-=?;:'".<>\{\}\[\]\\\/ ]/gim;
    
    carNameArray.map(function (value, index) {
    if (carNameArray[index].length > 5 || carNameArray.length <= 1) {throw new Error(MESSAGE.ERROR);}
    return true;
    })
    4
    if (carName.includes(',') !== true && REGEX.test(carName) !== true) {throw new Error(MESSAGE.ERROR)}; 
    
    const try_number = await Console.readLineAsync(MESSAGE.TRY_NUMBER); 

    Console.print(MESSAGE.TAB);
    Console.print(MESSAGE.ACTION_RESULT);

    for (let i = 0; i < try_number; i++) {
    const moveForward = number(carNameArray);
    
    for (let j = 0; j < carNameArray.length; j++) {
    const try_game = {};
    const action_result = (try_game.name = carNameArray[j] + ' ' + ':' + ' ' + moveForward[j]);  
    Console.print(action_result);
    }
    Console.print(MESSAGE.TAB);
    }
    Console.print(MESSAGE.FINAL_WINNER);
  }
}
export default App;
