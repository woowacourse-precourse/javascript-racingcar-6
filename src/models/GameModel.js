import OutputView from '../views/OutputView.js';
import CarModel from './CarModel.js';

/**
 * 게임 진행과 관련된 정보를 저장하는 모델
 */
class GameModel {
  /**
   * @param {number} rounds
   * @param {CarModel[]} cars
   */
  constructor(rounds, cars) {
    this.outputView = new OutputView();
    this.rounds = rounds;
    this.curRound = 0;
    this.cars = cars;
  }

  /**
   * 게임 오버 여부를 반환
   * @returns {boolean} 입력된 시도 횟수와 진행된 round 수가 일치할 경우 게임 오버
   */
  isGameOver() {
    return this.curRound === this.rounds;
  }

  /**
   * 자동차 모델 정보를 가져와 객체 배열로 반환
   * @returns {Array<{name: string, position: number}>} - 각 객체는 자동차 모델의 이름과 위치를 나타냄
   */
  getCarModelDTOs() {
    return this.cars.map((car) => car.getCarModelDTO());
  }

  /**
   * 한 라운드를 진행
   * 1. 자동차 모델 배열을 순회하며 move() 함수를 실행하여 모든 자동차를 한 번씩 전진시킨다.
   * 2. 현재 라운드 값(this.curRound)을 1 증가시킨다.
   */
  playRound() {
    this.cars.forEach((car) => {
      car.move();
    });
    this.curRound++;
  }

  /**
   * 우승자 이름이 담긴 배열을 반환
   * 1. 가장 멀리 간 자동차의 position을 구한다.
   * 2. 자동차 모델을 순회하며 해당 position 값을 가지고 있는 자동차의 이름을 배열로 반환한다.
   * @returns {string[]} 우승자 이름이 담긴 배열
   */
  getWinnersName() {
    const maxPos = this.getMaxPosition();

    return this.cars
      .filter((car) => car.isWinner(maxPos))
      .map((car) => car.name);
  }

  /**
   * 자동차 모델들의 position 중 최대값을 반환
   * @returns {number} position의 최대값
   */
  getMaxPosition() {
    const carModels = this.getCarModelDTOs();
    const positions = carModels.map((carModel) => carModel.position);

    return Math.max(...positions);
  }
}

export default GameModel;
