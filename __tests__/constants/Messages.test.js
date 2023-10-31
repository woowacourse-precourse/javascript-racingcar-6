import { OUTPUT_MESSAGE_METHOD } from '../../src/constants/messages';

describe('Message 모듈 테스트', () => {
  describe('racingResult 메서드 테스트', () => {
    test.each([
      {
        input: [
          [
            { carName: 'carA', position: 1 },
            { carName: 'carB', position: 1 },
          ],
          [
            { carName: 'carA', position: 2 },
            { carName: 'carB', position: 2 },
          ],
        ],
        expected: 'carA : -\ncarB : -\n\ncarA : --\ncarB : --',
      },
    ])('input에 대한 레이싱 결과는 $expected"으로 출력 된다.', ({ input, expected }) => {
      // given - when
      const result = OUTPUT_MESSAGE_METHOD.racingResult(input);
      // then
      expect(result).toBe(expected);
    });
  });

  describe('racingWinners 메서드 테스트', () => {
    test.each([
      {
        input: 'carA, carB',
        output: '\n최종 우승자 : carA, carB',
      },
    ])(
      '주어진 racingWinners가 $input 일 때, 결과는 "$output"으로 출력된다.',
      ({ input, output }) => {
        // given - when
        const result = OUTPUT_MESSAGE_METHOD.racingWinners(input);
        // then
        expect(result).toBe(output);
      },
    );
  });
});
