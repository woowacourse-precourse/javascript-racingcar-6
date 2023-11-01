//기능2. 시도할 횟수
export function trynumber(input) {
  if (parseInt(input) > 0) {
    return parseInt(input);
  } else {
    throw new Error('[ERROR] 올바른 숫자를 입력해주세요');
  }
}
