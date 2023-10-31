const ERROR_HEADER = '[ERROR]';

const ERROR = {
  carName: `${ERROR_HEADER} 자동차 이름을 입력해 주세요`,
  attemptNum: `${ERROR_HEADER} 시도할 횟수는 자연수여야 합니다`,
  nameLength: `${ERROR_HEADER} 이름은 1자 이상 5자 이하여야 합니다`,
  includeComma: `${ERROR_HEADER} 이름은 쉼표(,)를 기준으로 구분해야 합니다`,
};
Object.freeze(ERROR);

export default ERROR;
