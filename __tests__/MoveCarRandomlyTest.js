import {
  checkIsCarMove,
  moveCarsByDistance,
} from '../src/feature/MoveCarRandomly';

describe('MoveCarRandomly', () => {
  test('determine to go', () => {
    const randomNumberList = [3, 4, 0];
    const correctBooleanList = [false, true, false];

    randomNumberList.forEach((randomNumber, i) => {
      expect(checkIsCarMove(randomNumber)).toBe(correctBooleanList[i]);
    });
  });

  test('move car correctly', () => {
    const carDataList = [
      { name: 'a', distance: 1 },
      { name: 'b', distance: 0 },
      { name: 'c', distance: 14 },
    ];
    const distanceList = [3, 3, 7];
    const updatedCarDataList = [
      { name: 'a', distance: 4 },
      { name: 'b', distance: 3 },
      { name: 'c', distance: 21 },
    ];

    expect(moveCarsByDistance(carDataList, distanceList)).toEqual(
      updatedCarDataList
    );
  });
});
