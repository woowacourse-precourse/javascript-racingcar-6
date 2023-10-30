/**
 * controllers 폴더 내에 사용되는 상수 정의
 */

export const STANDARD_NUMBER = 4;

export const ERROR_MESSAGE = Object.freeze({
  print(message) {
    return `[ERROR] ${message}`;
  },
  existName: '동일한 이름이 있습니다.',
});
