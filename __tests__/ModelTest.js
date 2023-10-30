import Model from '../src/Model';

describe('Model 테스트', () => {
  test('자동차 모델 추가 - 정상 작동', () => {
    const inputs = ['pobi', 'java'];

    const model = new Model();

    inputs.forEach((name) => {
      model.addCar(name);
    });

    // 모델의 상태를 확인하는 부분
    expect(model.getCars().get('pobi')).toBe(0);
    expect(model.getCars().get('java')).toBe(0);
  });

  test('자동차 모델 추가 - 자동차 이름 중복 입력', async () => {
    const INPUT = 'pobi';

    const model = new Model();

    expect(model.addCar(INPUT)).toBeUndefined();
    expect(() => model.addCar(INPUT)).toThrowError('[ERROR]');
  });
});

describe('Model 테스트', () => {
  // test('자동차 전진', () => {
  //   const inputs = ['pobi', 'java'];
  //   const model = new Model();
  //   inputs.forEach((name) => {
  //     model.addCar(name);
  //   });
  //   // 모델의 상태를 확인하는 부분
  //   expect(model.getCars().get('pobi')).toBe(0);
  //   expect(model.getCars().get('java')).toBe(0);
  // });
});
