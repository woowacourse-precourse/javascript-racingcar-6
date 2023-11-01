import App from '../src/App';
import { Random } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

describe('유틸함수 테스트', () => {
  test('경주 중 진행 회차 마다 결과값 리턴', () => {
    const INPUT = [
      { name: 'pobi : ', score: 0 },
      { name: 'bono : ', score: 0 },
      { name: 'ade : ', score: 0 },
    ];

    const OUTPUT = [
      { name: 'pobi : ', score: 0 },
      { name: 'bono : -', score: 1 },
      { name: 'ade : -', score: 1 },
    ];

    Random.pickNumberInRange
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(5);

    const APP = new App();

    expect(APP.addPointRace(INPUT)).toEqual(OUTPUT);
  });

  test('경기 결과 우승자 리턴', () => {
    const INPUT_CAR_LIST = ['pobi', 'lulu', 'json'];
    const INPUT_RACE = [
      { name: 'pobi : ----', score: 4 },
      { name: 'lulu : --', score: 2 },
      { name: 'json : ---', score: 3 },
    ];

    const OUTPUT = ['pobi'];

    const APP = new App();

    expect(APP.calculateMaxScoreCarList(INPUT_CAR_LIST, INPUT_RACE)).toEqual(
      OUTPUT
    );
  });

  test('경기 결과 우승자 복수 리턴', () => {
    const INPUT_CAR_LIST = ['pobi', 'lulu', 'json'];
    const INPUT_RACE = [
      { name: 'pobi : ----', score: 4 },
      { name: 'lulu : ----', score: 4 },
      { name: 'json : --', score: 2 },
    ];

    const OUTPUT = ['pobi', 'lulu'];

    const APP = new App();

    expect(APP.calculateMaxScoreCarList(INPUT_CAR_LIST, INPUT_RACE)).toEqual(
      OUTPUT
    );
  });
});
