// @ts-check

import { Cars } from "../domain/Cars";

export class InputConverter {
  /**
   *
   * @param {string} input - 사용자가 입력한 값
   * @returns {Cars} - 비즈니스 로직(모든 차 주행하기)을 실행한 Cars 도메인 객체
   */
  convertToCars(input) {
    // 'asd,qwe,zxc' -> ['asd','qwe','zxc']
    const carNames = input.split(","); //['asd','qwe','zxc']
    // 이름 리스트로 Cars를 만든다
    return new Cars(carNames);
  }

  /**
   *
   * @param {string} input
   * @returns {number} - 시도 횟수
   * @description - 사용자가 입력한 시도 횟수를 변환해서 `number`로 가져온다
   */

  convertToAttemptCount(input) {
    const attemptCount = Number(input);
    return attemptCount;
  }
}
