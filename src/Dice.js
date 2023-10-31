import { Random } from '@woowacourse/mission-utils';

export default class Dice {
  static MIN_NUMBER = 0;

  static MAX_NUMBER = 9;

  static roll() {
    const diceNum = Random.pickNumberInRange(Dice.MIN_NUMBER, Dice.MAX_NUMBER);
    return diceNum;
  }
}
