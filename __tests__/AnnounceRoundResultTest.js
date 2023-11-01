import { generateNameDistanceRow } from '../src/feature/AnnounceRoundResult';

describe('AnnounceRoundResult', () => {
  test('check message', () => {
    const nameDistanceList = [
      ['a', 3],
      ['b', 0],
    ];
    const answerList = ['a : ---', 'b :'];

    nameDistanceList.forEach((nameDistance, i) => {
      expect(generateNameDistanceRow(...nameDistance)).toBe(answerList[i]);
    });
  });
});
