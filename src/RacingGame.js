import { Random } from '@woowacourse/mission-utils';

export default class RacingGame {
  #carList;
  #tryRound;

  constructor(carList, tryRound) {
    this.#carList = carList;
    this.#tryRound = tryRound;
  }

  createRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  isFinish() {
    return this.#tryRound === 0;
  }

  _clearRound() {
    this.#tryRound -= 1;
  }

  _isMovalbe(number) {
    return number >= 4;
  }

  roundStart() {
    if (this.isFinish()) {
      throw new Error(
        '[ERROR] 입력받은 round 횟수만큼 게임을 진행했습니다. 결과를 확인해주세요'
      );
    }
    this.#carList.forEach((car) => {
      const carPickNumber = this.createRandomNumber();
      const isMovable = this._isMovalbe(carPickNumber);

      if (isMovable) {
        car.increasePosition();
      }
    });
    this._clearRound();
  }

  getRoundResult() {
    return this.#carList.map((car) => car.getPositionResult());
  }

  getWinners() {
    if (this.#tryRound !== 0) {
      // this.#tryRound 가 0이 아니면 error를 던지고 0이면 테스트 결과 반환하는 테스트 만들어보기
      throw new Error(
        `[ERROR] 게임 round가 전부 실행되지 않았습니다. 잔여 라운드 : ${
          this.#tryRound
        }회`
      );
    }

    const finalRoundResult = this.getRoundResult();
    const maxMoveAmount = finalRoundResult.reduce(
      (maxMoveAmount, carResult) => {
        return (maxMoveAmount = Math.max(
          maxMoveAmount,
          carResult['position'].length
        ));
      },
      Number.MIN_SAFE_INTEGER
    );

    const winners = finalRoundResult
      .filter((car) => car.position.length === maxMoveAmount)
      .map((car) => car.name)
      .join(', ');

    return winners;
  }
}
