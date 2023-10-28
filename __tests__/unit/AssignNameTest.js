import Cars from '../src/Cars.js';

describe('입력 받은 자동차의 이름이', () => {
  test('쉼표로 이름을 구분이 가능한가?', () => {
    const names = 'pobi,woni,jun';

    expect(Cars.splitNamesByComma(names).length).toBeGreaterThan(0);
  });

  test('길이가 1~5 사이의 이름인가?', () => {
    const names = 'pobi,woni,jun';
    const cars = new Cars(names);

    cars.getCarsNames.forEach((name) => {
      expect(name.length).toBeGreaterThan(0);
      expect(name.length).toBeLessThanOrEqual(5);
    });
  });

  test('문자만을 허용하는가?', () => {
    const names = 'pobi,woni,jun';
    const cars = new Cars(names);
    const regex = /^[\p{L}]{1,5}$/u;

    cars.getCarsNames.forEach((name) => {
      expect(regex.test(name)).toBeTruthy();
    });
  });

  test('쉼표를 포함하지 않을 경우 예외가 발생하는가?', () => {
    const cars = new Cars('pobi,,juna');
    const names = cars.getCarsNames;

    expect(validator.evaluateNames(names)).toThrow('[ERROR]');
  });

  test('공백일 경우 예외가 발생하는가?', () => {
    const cars = new Cars('pobi,,juna');
    const names = cars.getCarsNames;

    expect(validator.evaluateNames(names)).toThrow('[ERROR]');
  });

  test('5자리 이상일 경우 예외가 발생하는가?', () => {
    const cars = new Cars('pobi,woni,junaaa');
    const names = cars.getCarsNames;

    expect(validator.evaluateNames(names)).toThrow('[ERROR]');
  });
});
