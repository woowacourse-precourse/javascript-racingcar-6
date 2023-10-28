import ResultModel from '../src/Model/ResultModel';

describe('ResultModel Test', () => {
  let resultModel;
  beforeEach(() => {
    resultModel = new ResultModel();
  });

  test('회차마다 레이싱 결과를 만든다.', () => {
    const cars = [
      { name: 'pobi', moveCounts: 1 },
      { name: 'ukgi', moveCounts: 0 },
    ];
    resultModel.addAttempsResult(cars);
    expect(resultModel.getResult()).toEqual([
      [
        ['pobi', 1],
        ['ukgi', 0],
      ],
    ]);
  });
});
