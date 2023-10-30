import { ERROR } from './constants/Error.js';

export function validName(name) {
  if (name === '') {
    throw new Error(ERROR.nameBlank);
  }
  const carNames = name.split(',').map((name) => name.trim());
  for (const carName of carNames) {
    if (carName.length > 5) {
      throw new Error('[ERROR] 이름은 5글자를 초과할 수 없습니다.');
    }
  }
}

export function validTryCount(tryCount) {
  if (tryCount === '') {
    throw new Error(ERROR.tryCountBlank);
  }
  if (isNaN(tryCount)) {
    throw new Error(ERROR.tryCountNaN);
  }
}
