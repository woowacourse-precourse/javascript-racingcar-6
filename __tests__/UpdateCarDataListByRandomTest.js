import {
  checkWhetherCarMove,
  moveCarsByDistance,
} from '../src/feature/UpdateCarDataListByRandom.js';

describe('UpdateCarDataListByRandom', () => {
  test('determine to go', () => {
    // test given MOVE_CAR_STANDARD : 4

    const randomNumberList = [3, 4, 0];
    const correctBooleanList = [false, true, false];

    randomNumberList.forEach((randomNumber, i) => {
      expect(checkWhetherCarMove(randomNumber)).toBe(correctBooleanList[i]);
    });
  });

  test('move car correctly', () => {
    // test given GO_DISTANCE : 1, STOP_DISTANCE : 0
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
      updatedCarDataList,
    );
  });
});
