import { chooseWinnerInArray } from '../src/feature/AnnounceWinner';

describe('AnnounceWinner', () => {
  test('choose winner', () => {
    const carDataListList = [
      [
        { name: 'a', distance: 0 },
        { name: 'b', distance: 0 },
        { name: 'c', distance: 0 },
      ],
      [
        { name: 'a', distance: 5 },
        { name: 'b', distance: 2 },
        { name: 'c', distance: 0 },
      ],
      [
        { name: 'a', distance: 4 },
        { name: 'b', distance: 5 },
        { name: 'c', distance: 5 },
        { name: 'd', distance: 1 },
      ],
    ];
    const answerList = [['a', 'b', 'c'], ['a'], ['b', 'c']];

    carDataListList.forEach((carDataList, i) => {
      expect(chooseWinnerInArray(carDataList)).toEqual(answerList[i]);
    });
  });
});
