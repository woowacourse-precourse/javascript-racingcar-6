import { MissionUtils } from '@woowacourse/mission-utils';

export async function consoleInput(announcementText) {
  return MissionUtils.Console.readLineAsync(announcementText);
}

export function consolePrint(announcementText) {
  return MissionUtils.Console.print(announcementText);
}

export function getRandomNumberInRange() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}
