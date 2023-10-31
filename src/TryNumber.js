//기능2.
export function trynumber(input) {
  if (parseInt(input) > 0) {
    // 0보다 큰 정수형
    return parseInt(input);
  } else {
    throw new Error('[ERROR] 올바른 숫자를 입력해주세요');
  }
}
