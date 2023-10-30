import { createCarData } from '../src/utils/createCarData';
import { createRandomNumber } from '../src/utils/createRandomNumber';
import { goStopCar } from '../src/utils/goStopCar';
import { pickWinner } from '../src/utils/pickWinner';
import { validateLength, validateIsNumber } from '../src/utils/validate';

describe('예외 테스트', () => {
  test('자동차 이름 길이 예외 검사', () => {
    const carName = 'Juru9,Jru';

    validateLength(carName);
  });

  test('자동차 이동 횟수 예외 검사', () => {
    const moveCount = '8';

    validateIsNumber(moveCount);
  });
});

describe('유틸리티 함수', () => {
  test('무작위 숫자 생성', () => {
    const carData = [
      {
        name: 'pobi',
        number: 0,
        result: '',
      },
      {
        name: 'woni',
        number: 0,
        result: '',
      },
      {
        name: 'juru',
        number: 0,
        result: '',
      },
    ];
    const newCarData = createRandomNumber(carData);
    newCarData.forEach((data) => {
      expect(data.number).toBeGreaterThanOrEqual(0);
      expect(data.number).toBeLessThan(10);
    });
  });

  test('자동차 전진', () => {
    const carData = [
      {
        name: 'pobi',
        number: 5,
        result: '',
      },
      {
        name: 'woni',
        number: 4,
        result: '',
      },
      {
        name: 'juru',
        number: 1,
        result: '',
      },
    ];

    expect(goStopCar(carData)).toEqual([
      {
        name: 'pobi',
        number: 5,
        result: '-',
      },
      {
        name: 'woni',
        number: 4,
        result: '-',
      },
      {
        name: 'juru',
        number: 1,
        result: '',
      },
    ]);
  });

  test('우승 자동차 선정', () => {
    const carData = [
      {
        name: 'pobi',
        number: 5,
        result: '----',
      },
      {
        name: 'woni',
        number: 4,
        result: '--',
      },
      {
        name: 'juru',
        number: 1,
        result: '----',
      },
    ];

    expect(pickWinner(carData)).toEqual(['pobi', 'juru']);
  });

  test('자동차 객체 생성', () => {
    const carName = 'pobi,woni,juru';
    const carNameList = carName.split(',');

    expect(createCarData(carNameList)).toEqual([
      {
        name: 'pobi',
        number: 0,
        result: '',
      },
      {
        name: 'woni',
        number: 0,
        result: '',
      },
      {
        name: 'juru',
        number: 0,
        result: '',
      },
    ]);
  });
});
