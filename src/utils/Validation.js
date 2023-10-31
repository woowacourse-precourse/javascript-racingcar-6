import { getCarNames } from './Input.js';

// 자동차 이름이 5글자 초과 시 예외발생시키기
const validateCarNames = (names) => {
  names.forEach((name) => {
    if (name.length > 5)
      throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해야합니다!');
  });
};

export { validateCarNames };
