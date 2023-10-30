import { Console } from "@woowacourse/mission-utils";

/**
 * 메시지를 출력하고, 사용자의 값을 입력받는다.
 * @params {string} 출력할 메시지
 * @returns {string} 사용자가 입력한 값
 */
export const readLineAsync = async (message) => {
  const input = await Console.readLineAsync(message);
  return input;
};
