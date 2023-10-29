import Validation from '../src/modules/Validation.js';

describe('자동차 이름 입력', () => {
  const LIMITED_LENGTH = 5;

  test.each([['람보르기니,롤스로이스,스피라'], ['Fiat,BMW,Jeep,Ford,Volvo']])(
    '이름이 담긴 Map을 성공적으로 반환',
    (input) => {
      // given
      const result = new Map(input.split(',').map((car) => [car, 0]));

      // when
      const { getNamesOfCar } = Validation;

      // then
      expect(getNamesOfCar(input, LIMITED_LENGTH)).toEqual(result);
    },
  );

  test.each([['KIA,Honda,BMW!'], ['Honda,Jaguar'], ['Honda,Honda']])(
    '이름에 대한 예외 처리',
    (input) => {
      // when
      const { getNamesOfCar } = Validation;
      function wrongInput() {
        getNamesOfCar(input, LIMITED_LENGTH);
      }

      // then
      expect(wrongInput).toThrow('[ERROR]');
    },
  );
});

describe('시도할 횟수 입력', () => {
  test('횟수를 성공적으로 반환', () => {
    // given
    const inputs = ['3', '5', '7'];
    const outputs = [3, 5, 7];

    // when
    const { getNumberOfTimes } = Validation;

    // then
    outputs.forEach((output, idx) => {
      expect(getNumberOfTimes(inputs[idx])).toBe(output);
    });
  });

  test.each(['룰루', '0', '여섯'])('횟수에 대한 예외 처리', (input) => {
    // when
    const { getNumberOfTimes } = Validation;
    function wrongInput() {
      getNumberOfTimes(input);
    }

    // then
    expect(wrongInput).toThrow('[ERROR]');
  });
});
