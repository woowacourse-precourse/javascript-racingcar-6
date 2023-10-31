import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, MESSAGE } from '../constants/message.js';

const checkRacer = racers => {
  const racerList = racers.split(',');
  if (racerList.length !== new Set(racerList).size)
    throw new Error(ERROR_MESSAGE.racerDuplicateError);
  racerList.forEach(racer => {
    if (racer.length > 5 || racer.length === 0)
      throw new Error(ERROR_MESSAGE.racerNameLengthError);
  });
  return racerList;
};
const setRacer = async () => {
  const racers = await Console.readLineAsync(MESSAGE.inputNameMessage);
  const racerList = checkRacer(racers);
  // 점수를 갖는 객체 배열로 반환하고 싶어
  const racerMap = new Map();
  racerList.forEach(racer => racerMap.set(racer, 0));
  return racerMap;
};

const checkRound = round => {
  const numberRound = Number(round);
  if (Number.isNaN(numberRound)) throw new Error(ERROR_MESSAGE.roundTypeError);
  if (round <= 0) throw new Error(ERROR_MESSAGE.roundRangeError);
  if (numberRound !== parseInt(numberRound, 10))
    throw new Error(ERROR_MESSAGE.roundIntegerError);
  return true;
};
const setRound = async () => {
  const round = await Console.readLineAsync(MESSAGE.inputRoundMessage);
  checkRound(round);
  return round;
};

const gameSetting = async () => {
  const racerMap = await setRacer();
  const round = await setRound();
  return { racerMap, round };
};

export default gameSetting;
