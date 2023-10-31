/**
 * utils 폴더 내에 사용되는 상수 정의
 */

export const RANDOM_NUMBER = Object.freeze({
  from: 0,
  to: 9,
});

export const ERROR_MESSAGE = Object.freeze({
  print(message) {
    return `[ERROR] ${message}`;
  },
  invalidName: '이름은 5자 이하의 영문, 한글로 이루어져야 합니다.',
  invalidCount: '시도 횟수는 0이상의 수만 입력할 수 있습니다.',
});
