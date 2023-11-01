import NAME_ERROR from '../constants/ErrorMessage.js';

//1) 자동차 이름 유효성 검사
export const InputValid = (inputName) => {
  if (typeof inputName !== 'string' || inputName.trim() === '') {
    throw new Error(NAME_ERROR.INVALID_NAME_ERROR);
  }

  let name = inputName.split(',');

  //1.중복된 자동차 이름 기입시
  let nameSet = new Set(name);
  if (name.length !== nameSet.size) {
    throw new Error(NAME_ERROR.SAME_CAR_NAME_ERROR);
  }

  //2.자동차 이름 길이가 6자 이상일 시
  for (let i = 0; i < name.length; i++) {
    if (name[i].length > 5) {
      throw new Error(NAME_ERROR.LENGTH_LESS_ERROR);
    }
  }

  //3.자동차 이름이 쉼표로 구분되지 않을 경우(== 이름이 1개일 경우)
  if (!inputName.includes(',')) {
    throw new Error(NAME_ERROR.INPUT_ONE_CAR_ERROR);
  }
};

//2) 시도횟수 유효성 검사
export const RoundValid = (round) => {
  //1. 시도 횟수로 숫자가 아닌 값을 입력했을 시
  if (isNaN(round)) {
    throw new Error(NAME_ERROR.NOT_A_NUMBER_ERROR);
  }

  //2. 시도 회수로 음수, 0 기입시
  if (round <= 0) {
    throw new Error(NAME_ERROR.ZERO_OR_NEGATIVE_NUMBER_ERROR);
  }
};
