import Utils from '../src/utils/Utils';
import { createRandomNumber } from '../src/utils/createRandomNumber';
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
        randomNumber: 0,
        result: '',
      },
      {
        name: 'woni',
        randomNumber: 0,
        result: '',
      },
      {
        name: 'juru',
        randomNumber: 0,
        result: '',
      },
    ];

    const newCarData = createRandomNumber(carData);

    newCarData.forEach((data) => {
      expect(data.randomNumber).toBeGreaterThanOrEqual(0);
      expect(data.randomNumber).toBeLessThan(10);
    });
  });

  test('자동차 전진', () => {
    const carData = [
      {
        name: 'pobi',
        randomNumber: 5,
        result: '',
      },
      {
        name: 'woni',
        randomNumber: 4,
        result: '',
      },
      {
        name: 'juru',
        randomNumber: 1,
        result: '',
      },
    ];

    expect(Utils.goStopCar(carData)).toEqual([
      {
        name: 'pobi',
        randomNumber: 5,
        result: '-',
      },
      {
        name: 'woni',
        randomNumber: 4,
        result: '-',
      },
      {
        name: 'juru',
        randomNumber: 1,
        result: '',
      },
    ]);
  });

  test('우승 자동차 선정', () => {
    const carData = [
      {
        name: 'pobi',
        randomNumber: 5,
        result: '----',
      },
      {
        name: 'woni',
        randomNumber: 4,
        result: '--',
      },
      {
        name: 'juru',
        randomNumber: 1,
        result: '----',
      },
    ];

    expect(Utils.pickWinner(carData)).toEqual(['pobi', 'juru']);
  });

  test('자동차 객체 생성', () => {
    const carName = 'pobi,woni,juru';
    const carNameList = carName.split(',');

    expect(Utils.createCarData(carNameList)).toEqual([
      {
        name: 'pobi',
        randomNumber: 0,
        result: '',
      },
      {
        name: 'woni',
        randomNumber: 0,
        result: '',
      },
      {
        name: 'juru',
        randomNumber: 0,
        result: '',
      },
    ]);
  });
});
