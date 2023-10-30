import { MESSAGE } from '../Constant/constant';
import { readLineAsync } from '../Utils/Utils';
import { checkAttempt, checkParticipants } from '../Validates';

/**
 * 게임 진행 횟수를 입력받는 기능
 * return : 입력 값을 숫자로 반환
 * 주의 : 0 이하거나 숫자가 아니면 ERROR
 */
export const getAttempt = async () => {
  const attempt = await readLineAsync(MESSAGE.ATTEMPT);

  await checkAttempt(attempt);

  return Number(attempt);
};

/**
 * 게임 참가자 명단을 받는 기능
 * return : 참가자 명단을 배열로 반환
 * 주의 : 참가자 이름이 5글자 초과면 ERROR
 */
export const getParticipant = async () => {
  const participants = await readLineAsync(MESSAGE.START);
  const participantsList = participants.split(',');

  await checkParticipants(participantsList);

  return participantsList;
};
