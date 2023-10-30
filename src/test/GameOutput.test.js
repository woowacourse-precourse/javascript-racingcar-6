import { GAME, ERROR } from '../constants.js';
import Output from '../view/output.js';
import RacingCarName from '../racingcargame/RacingCarName.js';
import RacingTryCount from '../racingcargame/RacingTryCount.js';
import CarController from '../racingcargame/Car.js';
import GameWinner from '../racingcargame/GameWinner.js';

describe('게임 문구 출력', () => {
  test('경주할 자동차 이름을 입력하세요 메시지가 출력되는지 확인', async () => {
    // 모의(mock)를 사용하여 Input.text가 호출될 때 기대되는 값 반환
    const expectedMessage = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
    jest.spyOn(Output, 'text').mockResolvedValue(expectedMessage);
    const result = await Output.text();

    expect(result).toBe(expectedMessage);
  });

  test('시도할 횟수는 몇 회인가요? 메시지가 출력되는지 확인', async () => {
    // 모의(mock)를 사용하여 Input.text가 호출될 때 기대되는 값 반환
    const expectedMessage = '시도할 횟수는 몇 회인가요?';
    jest.spyOn(Output, 'text').mockResolvedValue(expectedMessage);
    const result = await Output.text();

    expect(result).toBe(expectedMessage);
  });

  test('실행 결과 메시지가 출력되는지 확인', async () => {
    // 모의(mock)를 사용하여 Input.text가 호출될 때 기대되는 값 반환
    const expectedMessage = '실행 결과';
    jest.spyOn(Output, 'text').mockResolvedValue(expectedMessage);
    const result = await Output.text();

    expect(result).toBe(expectedMessage);
  });
});

describe('잘못된 값을 입력하면 에러 문구 출력 - 자동차 이름', () => {
  test('자동차 이름을 입력하지 않은 경우', () => {
    const name = '';

    expect(() => RacingCarName.validate(name)).toThrow(ERROR.EMPTY_CAR_NAME);
  });

  test('유효하지 않은 자동차 이름 형식일 경우(', () => {
    const name = ['tesla,,,', 'tesla, ,benz', 'tesla,'];

    expect(() => RacingCarName.validate(name[0])).toThrow(ERROR.INVALID_CAR_NAME);
    expect(() => RacingCarName.validate(name[1])).toThrow(ERROR.INVALID_CAR_NAME);
    expect(() => RacingCarName.validate(name[2])).toThrow(ERROR.INVALID_CAR_NAME);
  });

  test('중복되는 자동차 이름이 존재할 경우', () => {
    const name = 'bmw,benz,bmw,tesla';

    expect(() => RacingCarName.validate(name)).toThrow(ERROR.DUPLICATE_CAR_NAME);
  });

  test('자동차 이름이 공백 포함 5자 이하가 아닐 경우', () => {
    const name = 'bmw,benz,tesla,lamborghini';

    expect(() => RacingCarName.validate(name)).toThrow(ERROR.OVER_CAR_NAME_LENGTH);
  });
});

describe('잘못된 값을 입력하면 에러 문구 출력 - 시도 횟수', () => {
  test('유효하지 않은 형식일 경우', () => {
    const names = ['', null, undefined];

    names.map((name) => expect(() => RacingTryCount.validate(name)).toThrow(ERROR.INVALID_COUNT));
  });

  test('시도 횟수가 0보다 큰 수가 아닐 경우', () => {
    const names = ['0', '-1', ' ', '@', '안녕', '6육'];

    names.map((name) =>
      expect(() => RacingTryCount.validate(name)).toThrow(ERROR.MUST_ENTER_A_NUMBER_OVER_ZERO),
    );
  });
});

describe('경주 실행 결과 출력', () => {
  test('랜덤 값을 4로 적용한 후, 경주 실행 결과 확인', () => {
    const carController = new CarController(['bmw', 'benz', 'tesla', 'audi']);
    carController.cars.forEach((car) => car.advanceIfOverFour(4));
    const result = carController.advanceResult();

    expect(result).toEqual(['bmw : -', 'benz : -', 'tesla : -', 'audi : -']);
  });
});

describe('게임 완료 후 우승자 안내 문구 출력', () => {
  test('랜덤 값을 4로 적용한 후, 경주 실행 결과 확인', () => {
    const winner = new GameWinner({ bmw: 2, benz: 3, tesla: 3, audi: 3 });
    winner.getKeysOfMaxValue(winner.findMaxValue());
    const result = GAME.WINNER + winner.printWinners();

    expect(result).toEqual('최종 우승자 : benz, tesla, audi');
  });
});
