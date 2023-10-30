import { MissionUtils } from '@woowacourse/mission-utils';
import Refree from '../src/Refree.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('1라운드 진행시 결과 테스트', () => {
  let refree;
  const MOVING_FORWARD = 4;
  const STOP = 3;

  beforeEach(() => {
    refree = new Refree();
  });

  test('강아지만 이동시 결과값 테스트', () => {
    const inputs = ['강아지', '고양이'];
    mockQuestions(inputs);
    refree.registerCars(inputs);

    const randoms = [MOVING_FORWARD, STOP];
    mockRandoms([...randoms]);

    refree.moveCars();

    const outputs = [
      ['강아지', 1],
      ['고양이', 0],
    ];

    expect(refree.getRecordResultList()).toEqual(outputs);
  });

  test('고양이만 이동시 결과값 테스트', () => {
    const inputs = ['강아지', '고양이'];
    mockQuestions(inputs);
    refree.registerCars(inputs);

    const randoms = [STOP, MOVING_FORWARD];
    mockRandoms([...randoms]);

    refree.moveCars();

    const outputs = [
      ['강아지', 0],
      ['고양이', 1],
    ];

    expect(refree.getRecordResultList()).toEqual(outputs);
  });
});

describe('3라운드 진행시 우승자 테스트', () => {
  let refree;
  const MOVING_FORWARD = 4;
  const STOP = 3;

  beforeEach(() => {
    refree = new Refree();
  });

  test('강아지 3번, 고양이 1번, 거북이 1번 이동시 => 강아지 우승 테스트', () => {
    const inputs = ['강아지', '고양이', '거북이'];
    mockQuestions(inputs);
    refree.registerCars(inputs);

    const randomArr = [
      [MOVING_FORWARD, STOP, STOP],
      [MOVING_FORWARD, MOVING_FORWARD, STOP],
      [MOVING_FORWARD, STOP, MOVING_FORWARD],
    ];

    randomArr.forEach((randoms) => {
      mockRandoms([...randoms]);
      refree.moveCars();
    });

    expect(refree.getWinner()).toEqual(['강아지']);
  });

  test('강아지 1번, 고양이 2번, 거북이 1번 이동시 => 고양이 우승 테스트', () => {
    const inputs = ['강아지', '고양이', '거북이'];
    mockQuestions(inputs);
    refree.registerCars(inputs);

    const randomArr = [
      [STOP, MOVING_FORWARD, STOP],
      [MOVING_FORWARD, MOVING_FORWARD, STOP],
      [STOP, STOP, MOVING_FORWARD],
    ];

    randomArr.forEach((randoms) => {
      mockRandoms([...randoms]);
      refree.moveCars();
    });

    expect(refree.getWinner()).toEqual(['고양이']);
  });

  test('강아지 1번, 고양이 1번, 거북이 2번 이동시 => 거북이 우승 테스트', () => {
    const inputs = ['강아지', '고양이', '거북이'];
    mockQuestions(inputs);
    refree.registerCars(inputs);

    const randomArr = [
      [STOP, MOVING_FORWARD, STOP],
      [MOVING_FORWARD, STOP, MOVING_FORWARD],
      [STOP, STOP, MOVING_FORWARD],
    ];

    randomArr.forEach((randoms) => {
      mockRandoms([...randoms]);
      refree.moveCars();
    });

    expect(refree.getWinner()).toEqual(['거북이']);
  });

  test('강아지 2번, 고양이 2번, 거북이 1번 이동시 => 강아지, 거북이 동시 우승 테스트', () => {
    const inputs = ['강아지', '고양이', '거북이'];
    mockQuestions(inputs);
    refree.registerCars(inputs);

    const randomArr = [
      [MOVING_FORWARD, MOVING_FORWARD, STOP],
      [MOVING_FORWARD, MOVING_FORWARD, STOP],
      [STOP, STOP, MOVING_FORWARD],
    ];

    randomArr.forEach((randoms) => {
      mockRandoms([...randoms]);
      refree.moveCars();
    });

    expect(refree.getWinner()).toEqual(['강아지', '고양이']);
  });

  test('강아지 1번, 고양이 1번, 거북이 1번 이동시 => 강아지, 고양이, 거북이 동시 우승 테스트', () => {
    const inputs = ['강아지', '고양이', '거북이'];
    mockQuestions(inputs);
    refree.registerCars(inputs);

    const randomArr = [
      [MOVING_FORWARD, STOP, STOP],
      [STOP, MOVING_FORWARD, STOP],
      [STOP, STOP, MOVING_FORWARD],
    ];

    randomArr.forEach((randoms) => {
      mockRandoms([...randoms]);
      refree.moveCars();
    });

    expect(refree.getWinner()).toEqual(['강아지', '고양이', '거북이']);
  });
});
