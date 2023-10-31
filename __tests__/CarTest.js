import Car from '../src/Car';

let car;

describe('isValidCarName 함수 테스트', () => {
  describe('적합하지 않은 이름일 때 예외 처리', () => {
    const invalidCarNames = [
      '',
      '\0',
      ' ',
      '    ',
      'aa,a',
      'abbbca',
      ' 가 나 다 라 마 바 ',
    ];

    invalidCarNames.forEach((name, index) => {
      test(`테스트 케이스 ${name} : ${index}번째`, () => {
        // given
        const car = new Car(name);

        // when
        const result = () => car.isValidCarName();

        // then
        expect(result).toThrow();
      });
    });
  });

  describe('적합한 이름일 때 true 반환', () => {
    const validCarNames = [
      'a',
      'av',
      'avcd',
      'ase가 ',
      'ㅁㅇ..ㅇ',
      '간다 마바 ',
      'q!2$',
      '가나다라!',
    ];

    validCarNames.forEach((name, index) => {
      test(`테스트 케이스 ${name} : ${index}번째`, () => {
        // given
        const car = new Car(name);

        // when
        const result = car.isValidCarName();

        // then
        expect(result).toBeTruthy();
      });
    });
  });
});
