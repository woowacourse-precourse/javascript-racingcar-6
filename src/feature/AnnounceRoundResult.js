import { Console } from '@woowacourse/mission-utils';

const generateDashStrByDistance = (distance) => '-'.repeat(distance);

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
  Console.print('\n');
};
export default announceRoundResult;
