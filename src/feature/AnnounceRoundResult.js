import { Console } from '@woowacourse/mission-utils';
import { DISTANCE_MARK } from '../Constants.js';

const generateDashStrByDistance = (distance) => DISTANCE_MARK.repeat(distance);

export const generateNameDistanceRow = (name, distance) => {
  const dashes = generateDashStrByDistance(distance);
  return `${name} :${distance > 0 ? ' ' : ''}${dashes}`;
};

const announceRoundResult = (carDataList) => {
  carDataList.forEach((carDataObj) => {
    const nameDistanceRow = generateNameDistanceRow(
      carDataObj.name,
      carDataObj.distance
    );

    Console.print(nameDistanceRow);
  });
  Console.print('');
};
export default announceRoundResult;
