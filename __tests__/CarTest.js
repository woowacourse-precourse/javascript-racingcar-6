import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/RacingCarGame/Car/index.js';
import { SYMBOLS } from '../src/RacingCarGame/constants/index.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('Car 클래스 테스트', () => {
  let car;

  beforeEach(() => {
    car = new Car('Ferrari');
  });

  it('인스턴스의 이름을 반환하는 getName 함수를 테스트한다.', () => {
    expect(car.getName()).toBe('Ferrari');
  });

  it('인스턴스의 이동 가능 여부를 나타내는 canMove 함수를 테스트한다.', () => {
    const nums = [2, 4];
    const results = [false, true];

    mockRandoms(nums);

    results.forEach((result) => {
      expect(car.canMove()).toBe(result);
    });
  });

  it('인스턴스의 이동 문자열을 추가하는 move, countMove 함수를 테스트한다.', () => {
    const nums = [2, 4, 5];
    const moveResult = '--';

    mockRandoms(nums);

    nums.forEach(() => {
      car.move();
    });
    expect(car.countMove()).toBe(moveResult.length);
  });

  it('인스턴스의 name, position을 합쳐 문자열로 만드는 formatPosition 함수를 테스트한다.', () => {
    const nums = [4, 5];
    const moveResult = '--';

    mockRandoms(nums);

    nums.forEach(() => {
      car.move();
    });

    const formattedPosition = car.formatPosition();

    expect(formattedPosition).toStrictEqual(
      expect.stringContaining(moveResult),
    );
    expect(formattedPosition).toStrictEqual(
      expect.stringContaining(car.getName()),
    );
    expect(formattedPosition).toStrictEqual(
      expect.stringContaining(car.position),
    );
    expect(formattedPosition).toStrictEqual(
      expect.stringContaining(SYMBOLS.colon),
    );
    expect(formattedPosition).toStrictEqual(
      expect.stringContaining(SYMBOLS.lineBreak),
    );
  });
});
