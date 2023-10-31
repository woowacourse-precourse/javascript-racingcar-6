import { ERRORS } from '../constants/errors.js';

/**
 * 에러 문구를 포맷팅하여 던지는 함수
 * @param {string} message 에러 메시지
 */
export function throwError(message) {
  throw new Error(`${ERRORS.prefix} ${message}`);
}
