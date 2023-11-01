import { NAME_ERROR, ROUND_ERROR } from '../constants/ErrorMessage';

export const InputValid = (inputName) => {
  const name = inputName.split(',');

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

  return name;
};

export const RoundValid = (round) => {
  //1. 시도 횟수로 숫자가 아닌 값을 입력했을 시
  if (round === null) {
    throw new Error(ROUND_ERROR.NOT_A_NUMBER_ERROR);
  }

  if (isNaN(round) || round.toString() !== round.toString()) {
    throw new Error(ROUND_ERROR.ZERO_OR_NEGATIVE_NUMBER_ERROR);
  }

  return round;
};
