import FinalWinnerSelector from '../../src/model/FinalWinnerSelector.js';

describe('FinalWinnerSelector', () => {
  describe('evaluate', () => {
    test.each([
      [
        new Map([
          ['dog', ''],
          ['cat', '--'],
          ['fox', '---'],
          ['frog', '---'],
          ['owl', '--'],
        ]),
        ['fox', 'frog'],
      ],
      [
        new Map([
          ['dog', ''],
          ['cat', '---'],
          ['fox', '----'],
          ['frog', '---'],
          ['owl', '-----'],
        ]),
        ['owl'],
      ],
      [
        new Map([
          ['dog', ''],
          ['cat', '--'],
          ['fox', '---'],
          ['frog', '---'],
          ['owl', '---'],
        ]),
        ['fox', 'frog', 'owl'],
      ],
    ])(
      '레이싱 최종 결과를 입력시 가장 많이 전진한 대상들을 출력합니다.',
      (inputMap, expectedWinners) => {
        const winners = FinalWinnerSelector.evaluate(inputMap);
        expect(winners).toEqual(expectedWinners);
      },
    );
  });
});
