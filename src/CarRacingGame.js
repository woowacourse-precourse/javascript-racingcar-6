import { Console, Random } from '@woowacourse/mission-utils';

export default class CarRacingGame {
  #carNameArray;
  constructor(carNameArray = []) {
    this.#carNameArray = [...carNameArray];
  }

  async gameStart() {
    const carNames = await this.getCarNames();
    // .catch(()=>{
    //   throw new Error('[ERROR')
    // });
  }

  async getCarNames() {
    try {
      const carNames = await Console.readLineAsync('닉네임을 입력해주세요.');
      return carNames;
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }
}
