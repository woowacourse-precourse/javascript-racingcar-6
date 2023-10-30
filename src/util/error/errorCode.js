const ERROR_CODE = [
  ['noRacerName', '이름이 없는 자동차가 존재합니다.'],
  ['tooLongRacerName', '자동차의 이름이 너무 깁니다.'],
  ['hasDuplicateName', '중복된 자동차명이 존재합니다.'],
  ['inputIsZero', '0은 입력할 수 없습니다.'],
  ['inputIsNaN', '숫자가 잘못된 형식입니다.'],
  ['inputIsEmpty', '입력 값이 없습니다.'],
];

const errorList = new Map(ERROR_CODE);

export default errorList;
