import { Random, Console } from '@woowacourse/mission-utils';
import { PLAY_GAME, ERROR_MESSAGE } from '../Constants.js'

class InputCarMoveCount {
  constructor() {
    this.cars = [];
  }

  async userInput() {
    Console.print(PLAY_GAME.input);
    const input = await Console.readLineAsync('');
    const carNames = input.split(',').map(name => name.trim());
    console.log(carNames);

    if (carNames.some(name => name.length > 5)) {
      throw new Error(ERROR_MESSAGE);
    }
    this.cars = carNames.map(name => ({ name, distance: 0 }));


    Console.print(PLAY_GAME.tryCount);
    await Console.readLineAsync('');

    Console.print(PLAY_GAME.result);
  }
}

export default InputCarMoveCount;