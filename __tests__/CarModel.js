import CarModel from '../src/Model/CarModel';

describe('CarModel Test', () => {
  let carModel;
  beforeEach(() => {
    carModel = new CarModel();
    const carNameList = 'pobi,ukgi';
    carModel.makeCar(carNameList);
  });

  test('자동차 이름목록을 전달하면 자동차를 만든다.', () => {
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

  test('자동차가 움직이거나 정지했으면 상태를 업데이트한다.', () => {
    carModel.updateMove('pobi', true);
    expect(carModel.getCar()).toEqual([
      { name: 'pobi', isMoves: [true] },
      { name: 'ukgi', isMoves: [] },
    ]);
  });
});
