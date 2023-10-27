const MAX_LENGTH_OF_NAME = 5;

const ERROR_LABEL = {
  default: "ERROR",
};

export const ERROR_MSG = {
  WRONG_NUMBER: `[${ERROR_LABEL.default}] 숫자가 잘못된 형식입니다.`,
  NAME_LEN_EXCEED: `[${ERROR_LABEL.default}] 자동차 이름은 ${MAX_LENGTH_OF_NAME} 글자 이하만 가능합니다.`,
};
