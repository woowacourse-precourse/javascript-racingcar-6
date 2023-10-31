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
await setRacer();
