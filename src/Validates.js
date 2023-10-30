import { ERROR_MESSAGE, NUMBER } from './Constant/constant';

/**
 * @param {*} participants : 진행 횟수 확인
 * 0보다 작거나 숫자가 아니면 ERROR
 */
export const checkAttempt = async (attempt) => {
  if (!Number(attempt)) throw new Error(ERROR_MESSAGE.ERROR_NOT_NUMBER);
  if (Number(attempt) <= 0) throw new Error(ERROR_MESSAGE.ERROR_LESS_THAN_ZERO);
};

/**
 * @param {*} randomNumber : 참가자가 받는 값
 * 0~9사이 값이 아니거나 숫자가 아니면 ERROR
 */
export const checkRandomNumber = async (randomNumber) => {
  if (!Number(randomNumber)) throw new Error(ERROR_MESSAGE.ERROR_NOT_NUMBER);
  if (Number(randomNumber) <= NUMBER.MIN || Number(randomNumber) > NUMBER.MAX) throw new Error(ERROR_MESSAGE.ERROR_OUT_OF_RANGE);
};

/**
 * @param {*} participants : 참가자 명단 확인
 * 이름이 5글자 초과, 빈 칸, 영어가 아닌 경우 ERROR
 */
export const checkParticipants = async (participants) => {
  const english = /^[a-zA-Z]*$/;

  for (let name of participants) {
    if (!english.test(name)) throw new Error(ERROR_MESSAGE.ERROR_NAME_CONFIGURATION);
    if (name.length > 5 || name.length === 0) throw new Error(ERROR_MESSAGE.ERROR_NAME_LENGTH);
  }
};
