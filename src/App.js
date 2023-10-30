import { Console } from '@woowacourse/mission-utils';
import { Dice } from './Dice.js';
import { Judge } from './Judge.js';
import { RacingGame } from './RacingGame.js';

class App {
  async play() {
    const dice = new Dice();
    const judge = new Judge();
    const game = new RacingGame(dice, judge);
    const cars = await this.getRaceCars();
    game.play(5, ['pobi', 'woni', 'jun']);
  }

  async getRaceCars() {
    const user = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const cars = user.split(',');
    cars.forEach((car) => {
      car = car.toString();
      if (car.length > 5)
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    });
    return cars;
  }
}

const app = new App();
app.play();

export default App;
