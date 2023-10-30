import { MissionUtils } from '@woowacourse/mission-utils';
const { Console } = MissionUtils;

/**
 * 인자로 받은 message를 출력
 * @param {*} message : 출력할 메시지
 */
export const print = (message) => {
  Console.print(message);
};

/**
 * 인자로 받은 message를 출력하고 입력 값을 받아옴
 * @param {*} message : 출력할 메시지
 * @returns : 입력받은 문자
 */
export const readLineAsync = async (message) => {
  return await Console.readLineAsync(message);
};
