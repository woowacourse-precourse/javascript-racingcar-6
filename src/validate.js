import {
  MINIMUM_NAME_NUMBER,
  NULL,
  NAME_LETTER_NUMBER_LIMIT,
} from './constant.js';

export function name(users) {
  if (users.length < MINIMUM_NAME_NUMBER) {
    throw new Error('[ERROR] 2개 이상의 이름이 입력되어야 합니다.');
  } else if (users.length !== new Set(users).size) {
    throw new Error('[ERROR] 중복된 이름이 존재합니다.');
  }

  for (const user of users) {
    if (!user || user.trim() === NULL) {
      throw new Error('[ERROR] 1글자 이상의 이름이 입력되어야 합니다.');
    } else if (user.length > NAME_LETTER_NUMBER_LIMIT) {
      throw new Error('[ERROR] 5자를 초과하는 이름이 입력되었습니다.');
    }
  }

  return true;
}

export function attemptNum(inputNum) {
  const regExp = new RegExp('^[1-9]\\d*$');
  if (!regExp.test(inputNum)) {
    throw new Error('[ERROR] 1 이상의 정수가 입력되지 않았습니다.');
  }

  return true;
}
