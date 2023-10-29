import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./message.js";
import { realNumber, try_racing } from "./computer.js";


class App {
  async play() {
    Console.print(MESSAGE.GAME_START)

    const player = await Console.readLineAsync(MESSAGE.RACING_CAR_NAME);
    
    const player_array = player.split(',');
    player_array.forEach(function (value, index) {
    if (player_array[index].length > 5) throw new Error(MESSAGE.ERROR);
    });

    const REGEX = /[`~!@#$%^&*()_|+\-=?;:'".<>\{\}\[\]\\\/ ]/gim;
    if (player.includes(',') !== true &&
    REGEX.test(player) !== true &&
    player_array.length <= 1) {throw new Error(MESSAGE.ERROR)};  

    const try_number = await Console.readLineAsync(MESSAGE.TRY_NUMBER);
    console.log(typeof(try_number));
    Console.print(' ');

Console.print(MESSAGE.ACTION_RESULT);

for (let i = 0; i < try_number; i++) {
  var try_game = {};
  player_array.forEach(function (value,index) {
    const action_result = (try_game.name = player_array[index] + ' ' + ':' + ' ');
    Console.print(action_result);
}
) 
Console.print(' ');
}


  }
  
}

// const app = new App(); 
// app.play();
export default App;
