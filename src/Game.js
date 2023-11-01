/* eslint-disable import/extensions */
import { Console, Random } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Settings from './Settings.js';

export default class Game {
  constructor() {
    this.SET_CARNAME = '';
    this.SET_TRYNUM = '';
    this.NEXT_TRACK = '\n';
    this.MAX_MOVE = '';
    this.WINNERS = '';
    this.WINNER_ARRAY = '';
  }

  async racing() {
    const settings = new Settings();
    this.SET_CARNAME = await settings.inputCarName();
    this.cars = Car.entryPlayer(this.SET_CARNAME);
    this.SET_TRYNUM = await settings.inputTry();
    this.racingOutput(this.cars, this.SET_TRYNUM);
  }

  racingOutput(carGroup, tryNum) {
    for (let i = 0; i < tryNum; i += 1) {
      carGroup.forEach((player) => {
        player.canMove();
        Console.print(`${player.getName()} : ${'-'.repeat(player.getMove())}`);
      });
      Console.print(this.NEXT_TRACK);
    }
    return this.pickWinner(carGroup);
  }

  pickWinner(carGroup) {
    this.MAX_MOVE = Math.max(...carGroup.map((player) => player.move));

    this.WINNERS = carGroup
      .filter((player) => player.move === this.MAX_MOVE)
      .map((player) => player.name);
    return this.winnerOutput(this.WINNERS);
  }

  winnerOutput(winners) {
    this.WINNER_ARRAY = new Array(winners).join(', ');
    return Console.print(`최종 우승자 : ${this.WINNER_ARRAY}`);
  }
}
