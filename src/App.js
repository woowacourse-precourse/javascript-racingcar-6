import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./message.js";
import { player, player_array, lengthError, regexError } from "./player.js"


class App {
  constructor() {
    this.player = null;
    this.player_array = null;
  }
  async play() {
    await Console.print(MESSAGE.GAME_START);

    this.player = player;
    this.player_array = player_array;
    
    if (lengthError.some((element) => !element)) {
    throw new Error(MESSAGE.ERROR);
    }

    try {regexError();} 
    catch (error) {
    throw new Error(MESSAGE.ERROR);
    }


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

const app = new App(); 
app.play();
// export default App;
