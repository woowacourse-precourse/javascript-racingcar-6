import { MissionUtils } from '@woowacourse/mission-utils';

export async function consoleInput(announcementText) {
  return MissionUtils.Console.readLineAsync(announcementText);
}

export function consolePrint(announcementText) {
  return MissionUtils.Console.print(announcementText);
}

export function getRandomNumberInRange(startNumber, endNumber) {
  return MissionUtils.Random.pickNumberInRange(startNumber, endNumber);
}
