import { Console, Random } from '@woowacourse/mission-utils';

export default class CarRacingGame {
  #carNameArray;

  async gameStart() {
    const carNames = await this.getCarNames().catch(()=>{
      throw new Error('[ERROR]')
    });

    this.#carNameArray = this.carNamesToCarNameArray(carNames);
  }

  carNamesToCarNameArray(carNames = ''){
    return carNames.split(',').map((carName)=>{
      const trimCarName = carName.trim();
      if(trimCarName.length > 5 || trimCarName.length === 0){
        throw new Error('[ERROR] 자동차 이름이 5문자 초과입니다.');
      }
      return trimCarName;
    })
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
