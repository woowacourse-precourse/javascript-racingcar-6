import { ERROR, NUMBER } from '../Constant/constants';

const validate = {
  // 이름 유효성 검사
  async nameValidation(nameList) {
    for (let i = 0; i < nameList.length; i++) {
      if (nameList[i].length > NUMBER.MAX_NAME_LENGTH) {
        // 문자열이 5자를 초과하는 경우
        throw new Error(ERROR.INPUT_OVER_LENGTH);
      } else if (nameList[i].includes(' ')) {
        // 문자열에 공백이 있는 경우
        throw new Error(ERROR.INPUT_SPACE_NAME);
      } else if (nameList[i] === '') {
        // 문자열이 빈 문자열인 경우
        throw new Error(ERROR.INPUT_NAME_EMPT);
      }
    }
    return nameList;
  },
  // 시도 횟수 유효성 검사
  async tryValidation(num) {
    if (num === '') {
      // 입력값이 없는 경우
      throw new Error(ERROR.INPUT_TRY_EMPT);
    } else if (num <= 0) {
      // 입력값이 0인 경우
      throw new Error(ERROR.INPUT_TRY_OVER);
    } else if (isNaN(num)) {
      // 입력값이 숫자가 아닌 경우
      throw new Error(ERROR.INPUT_TRY_TYPE);
    }
  },
};

export default validate;
