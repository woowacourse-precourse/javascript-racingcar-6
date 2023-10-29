import { Console, Random } from '@woowacourse/mission-utils'

import { INPUT_MESSAGE, ERROR_MESSAGE } from "./Message.js";
import Player from './Player.js';
import RacingGame from './RacingGame.js';
import Result from './Result.js';

const player = new Player();
const game = new RacingGame();
const result = new Result();


class App {

  #player
  #repeat
  #afterRace

  async play() {
    await this.setGame();
    this.#afterRace = await game.start(this.#player, this.#repeat);
    
    return result.result(this.#afterRace)

  }

  async setGame(){
    this.#player = await player.carName();
    this.#repeat = await player.repeatTimes();
  }

}

export default App;
