import RacingCar from '../src/RacingCar';

describe('RacingCar 클래스 - createEntry()', () => {
  let racingCar;
  let names;

  beforeEach(() => {
    racingCar = new RacingCar();
    names = ['bmw', 'audi', 'benz'];
  });

  test('Map객체를 환하는지 검사', () => {
    const entry = racingCar.createEntry(names);

    expect(entry).toBeInstanceOf(Map);
  });

  test('Map객체의 내용을 검사', () => {
    const entry = racingCar.createEntry(names);

    names.forEach((carName) => {
      expect(entry.get(carName)).toBe('');
    });
  });

  test('객체를 넣으면 에러가 발생하는지 체크', () => {
    const createEntryWithObject = () => {
      const names = {};
      racingCar.createEntry(names);
    };

    expect(createEntryWithObject).toThrow();
  });

  test('문자타입으로 된 숫자도 Map객체의 key로 사용할 수 있는지 확인', () => {
    names = ['111', '222', '333'];
    const entry = racingCar.createEntry(names);

    names.forEach((carName) => {
      expect(entry.has(carName)).toBeTruthy();
    });
  });
});

describe('RacingCar 클래스 - moveForwardCar()', () => {
  let racingCar;
  let entry;
  beforeEach(() => {
    const names = ['bmw', 'audi', 'benz'];
    racingCar = new RacingCar();
    entry = racingCar.createEntry(names);
  });

  test('자동차의 움직임이 있는지 검사', () => {
    const racingResult = racingCar.moveForwardCar(entry, '3');
    const mapToArr = [...racingResult.values()];

    const result = mapToArr.some((element) => element.length >= 1);

    expect(result).toBeTruthy();
  });

  test('트랙 도는 횟수를 0번으로 작성하면 자동차의 멈춘 상태를 확인', () => {
    const racingResult = racingCar.moveForwardCar(entry, '0');

    racingResult.forEach((value) => {
      expect(value).toBe('');
    });
  });
});
