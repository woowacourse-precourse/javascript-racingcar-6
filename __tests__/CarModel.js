import CarModel from '../src/Model/CarModel';

describe('CarModel Test', () => {
  let carModel;
  beforeEach(() => {
    carModel = new CarModel();
  });

  test('자동차 이름목록을 전달하면 자동차를 만든다.', () => {
    const carNameList = 'pobi,ukgi';
    carModel.makeCar(carNameList);
    expect(carModel.getCar()).toEqual([
      {
        name: 'pobi',
        isMoves: [],
      },
      {
        name: 'ukgi',
        isMoves: [],
      },
    ]);
  });
});
