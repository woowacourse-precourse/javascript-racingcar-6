import { ERROR_MESSAGE } from '../Constant/ERROR_MESSAGE';

/**
 * ERROR
 * - 이름이 1 ~ 5 글자가 아닌 경우
 * - 빈 칸이 입력된 경우
 * - 이름에 공백이 포함된 경우
 * - 이름에 영어가 아닌 다른 문자가 입력된 경우
 */
export const verifyParticipants = async (participants) => {
  const english = /^[a-zA-Z]*$/;
  for (let name of participants) {
    if (name.length !== name.trim().length) throw new Error(ERROR_MESSAGE.ERROR_NAME_HAVE_GAP);
    if (name.length > 5 || name.length === 0) throw new Error(ERROR_MESSAGE.ERROR_NAME_LENGTH);
    if (!english.test(name)) throw new Error(ERROR_MESSAGE.ERROR_NAME_CONFIGURATION);
  }
};

