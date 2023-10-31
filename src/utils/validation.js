import { ERROR } from '../Constant/constants';

const validate = {
  async nameValidation(nameList) {
    for (let i = 0; i < nameList.length; i++) {
      if (nameList[i].length > 5) {
        return ERROR.INPUT_OVER_LENGTH;
      }
      if (nameList[i].includes(' ')) {
        return ERROR.INPUT_SPACE_NAME;
      }
      if (nameList[i] === '') {
        return ERROR.INPUT_NAME_EMPT;
      }
    }
    return nameList;
  },
  async tryValidation(num) {
    if (num === '') {
      return ERROR.INPUT_TRY_EMPT;
    }
    if (num <= 0) {
      return ERROR.INPUT_TRY_OVER;
    }
    if (isNaN(num)) {
      return ERROR.INPUT_TRY_TYPE;
    }
  },
};

export default validate;
