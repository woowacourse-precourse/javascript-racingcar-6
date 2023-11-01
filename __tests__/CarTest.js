import Car from '../src/Car';
import { Random, Console } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('isValidCarName 함수 테스트', () => {
  describe('적합하지 않은 이름일 때 예외 처리', () => {
    const invalidCarNames = [
      '',
      '\0',
      ' ',
      '    ',
      'aa,a',
      'abbbca',
      ' 가 나 다 라 마 바 ',
    ];

    invalidCarNames.forEach((name, index) => {
      test(`테스트 케이스 ${name} : ${index}번째`, () => {
        // given
        const car = new Car(name);

        // when
        const result = () => car.isValidCarName();

        // then
        expect(result).toThrow();
      });
    });
  });

  describe('적합한 이름일 때 true 반환', () => {
    const validCarNames = [
      'a',
      'av',
      'avcd',
      'ase가 ',
      'ㅁㅇ..ㅇ',
      '간다 마바 ',
      'q!2$',
      '가나다라!',
    ];

    validCarNames.forEach((name, index) => {
      test(`테스트 케이스 ${name} : ${index}번째`, () => {
        // given
        const car = new Car(name);

        // when
        const result = car.isValidCarName();

        // then
        expect(result).toBeTruthy();
      });
    });
  });
});

describe('canMove 함수 테스트', () => {
  test('숫자가 3 이하일 때 false를 반환하는지 확인', () => {
    const randoms = [0, 1, 2, 3];
    mockRandoms(randoms);

    randoms.forEach((number) => {
      const car = new Car('car');
      const result = car.canMove();
      expect(result).toBeFalsy;
    });
  });

  test('숫자가 4 이상일 때 랜덤한 값을 반환하는지 확인', () => {
    const randoms = [4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);

    randoms.forEach((number) => {
      const car = new Car('car');
      const result = car.canMove();
      expect(result).toBeTruthy();
    });
  });
});

describe('printCurDistance 함수 테스트', () => {
  const inputs = [
    ['seung', 1],
    ['thae', 3],
  ];
  const outputs = ['seung : -', 'thae : ---'];

  inputs.forEach((input, index) => {
    test(`${input}에 대한 출력 테스트:`, () => {
      // given
      const car = new Car(input[0], input[1]);
      const logSpy = getLogSpy();
      const output = outputs[index];

      // when
      car.printCurDistance();

      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
