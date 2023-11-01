import Car from '../../src/Domain/Car';

describe('Car 테스트', () => {
  const validName = ['pobi', 'crong', 'honux'];
  const invalidName = ['pengooseDev', 'thisIsTooLong'];

  describe('자동차를 생성한다.', () => {
    invalidName.forEach((name) => {
      test(`이름은 5자 이하만 가능하다. (${name})`, () => {
        // when
        const createCar = () => new Car(name);

        // then
        expect(createCar).toThrow();
      });
    });

    validName.forEach((name) => {
      test(`${name} : 오빠 차 뽑았다`, () => {
        // when
        const car = new Car(name);

        // then
        expect(car.getName()).toBe(name);
      });

      test('기본 위치는 0이다.', () => {
        const car = new Car('pobi');

        expect(car.getPosition()).toBe(0);
      });
    });
  });
});
