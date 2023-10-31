import ResultModel from '../../src/Model/ResultModel';

describe('ResultModel Test', () => {
  let resultModel;
  let cars;
  beforeEach(() => {
    resultModel = new ResultModel();
    cars = [
      { name: 'pobi', moveCounts: 1 },
      { name: 'ukgi', moveCounts: 0 },
    ];
  });

  test('회차마다 레이싱 결과를 만든다.', () => {
    resultModel.addAttempsResult(cars);

    expect(resultModel.getAllRacingResult()).toEqual([
      [
        ['pobi', 1],
        ['ukgi', 0],
      ],
    ]);
  });

  test('모든 실행결과를 출력할 수 있는 템플릿을 만든다.', () => {
    resultModel.addAttempsResult(cars);
    const expectedTemplate = ['pobi : -', 'ukgi :'];

    expectedTemplate.forEach((template) => {
      expect(resultModel.makeConsoleOutputTemplete()).toEqual(
        expect.stringContaining(template),
      );
    });
  });
});
