import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./message.js";
import StartCarName from "./RacingCar/StartCarName.js";
import { carNameArray } from "./Validates/CarName.js";

class App {
  async play() {
    
    StartCarName;




    const try_number = await Console.readLineAsync(MESSAGE.TRY_NUMBER);
    console.log(typeof(try_number));
    Console.print(MESSAGE.TAB);

Console.print(MESSAGE.ACTION_RESULT);

for (let i = 0; i < try_number; i++) {
  var try_game = {};
  carNameArray.forEach(function (value,index) {
    const action_result = (try_game.name = carNameArray[index] + ' ' + ':' + ' ');
    Console.print(MESSAGE.ACTION_RESULT);
}
) 
Console.print(MESSAGE.TAB);
}


  }
  
}

const app = new App(); 
app.play();
// export default App;
