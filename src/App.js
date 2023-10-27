import { Console, Random } from '@woowacourse/mission-utils'

import { INPUT_MESSAGE, ERROR_MESSAGE } from "./Message.js";
import Player from './Player.js';

const player = new Player();

class App {
  async play() {
    const PLAYER = await player.gameStart();
    
  }
}

export default App;
