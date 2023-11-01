import { RANDOM } from '../src/constants.js';
import { Winner, MakeRandomNumber, RacingCar } from '../src/racingcargame/index.js';

// [게임 로직 기능] 테스트 파일
describe('0에서 9 사이에 랜덤 값 추출 기능', () => {
  test('주어진 범위 내에서 무작위 숫자를 생성하는지 확인', () => {
    const result = MakeRandomNumber();

    expect(result).toBeGreaterThanOrEqual(RANDOM.MIN);
    expect(result).toBeLessThanOrEqual(RANDOM.MAX);
  });
});

describe('추출한 랜덤 값이 4이상일 경우만 전진', () => {
  test('추출한 랜덤 값이 4일 경우 전진 횟수가 증가하는지 확인', () => {
    const car = new RacingCar('TestCar');
    car.advanceIfOverFour(4);

    expect(car.advance).toBe(1);
  });

  test('추출한 랜덤 값이 2일 경우 전진 횟수가 그대로인지 확인', () => {
    const car = new RacingCar('TestCar');
    car.advanceIfOverFour(2);

    expect(car.advance).toBe(0);
  });
});

describe('자동차 이름과 repeat(전진 횟수)으로 출력 메시지 리턴 기능', () => {
  test('직진횐수(advance)를 3으로 설정한 후, 정상적인 결과를 출력하는지 확인', () => {
    const car = new RacingCar('TestCar');
    car.advance = 3;
    const result = car.printAdvanceResult();

    expect(result).toBe('TestCar : ---');
  });
});

describe('게임 완료 시 누적값을 비교하며 최종 우승자 체크 기능', () => {
  test('게임 결과 객체를 주어 우승자를 제대로 출력하는지 확인', () => {
    const winner = new Winner({ bmw: 3, benz: 5, tesla: 1, audi: 5 });
    winner.getKeysOfMaxValue(winner.findMaxValue());
    const result = winner.printWinners();

    expect(result).toBe('benz, audi');
  });
});
describe('전진 횟수 리셋 기능', () => {
  test('전진 횟수를 6으로 설정한 후, 리셋 함수 실행 시 0으로 변하는지 확인', () => {
    const car = new RacingCar('TestCar');
    car.advance = 6;
    car.resetAdvance();

    expect(car.advance).toBe(0);
  });
});
