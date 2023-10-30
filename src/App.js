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
    const round = await this.getRaceRounds();
    game.play(round, cars);
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

  async getRaceRounds() {
    const user = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const rounds = Number(user);
    if (!Number.isInteger(rounds))
      throw new Error('횟수는 정수만 입력 가능합니다.');
    if (rounds < 1) throw new Error('1회 부터 플레이 가능합니다.');
    return rounds;
  }
}

const app = new App();
app.play();

export default App;
