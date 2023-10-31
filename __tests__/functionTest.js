import App from '../src/App';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/Message.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
  };

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('내 기능 테스트', () => {
  test('자동차 이름을 입력하지 않았을때 예외 발생', () => {
    // given
    const input = [];

    // when
    const app = new App();
    const fn = () => app.validateCarNames(input)

    // then
    expect(fn).toThrowError(ERROR_MESSAGE.NOCARNAMES_ERROR);
  }),

  test('자동차 이름 목록에서 하나라도 5자가 초과되면 예외 발생', () => {
    // given
    const input = [ 'pobi', 'test', 'Jwirang' ];

    // when
    const app = new App();
    const fn = () => app.validateCarNames(input)

    // then
    expect(fn).toThrowError(ERROR_MESSAGE.VALIDATECARNAME_ERROR);
  }),

  test('자동차 이름들을 입력받아 , 단위로 잘라 배열로 반환', async () => {
    // given
    const inputs = ['pobi,test,hi'];
    mockQuestions(inputs);

    // when
    const app = new App();
    const result = await app.getCarNames();

    // then
    expect(result).toContain('pobi');
    expect(result).toEqual(['pobi','test', 'hi']);
  })

  test('시도한 횟수가 정수가 아니면 예외 발생', async() => {
    // given
    const input = '4번';

    //when
    const app = new App();

    // then
    await expect(app.getPlayCount()).rejects.toThrowError(ERROR_MESSAGE.VALIDATEPLAYCOUNT_ERROR);
  });

  test('랜덤값이 4이상일 경우 1 반환', () => {
    // given
    mockRandoms([5]);

    // when
    const app = new App();
    const result = app.randomIndex();

    //then
    expect(result).toEqual(1);
  }),

  test('랜덤값이 3이하일 경우 0 반환', () => {
    // given
    mockRandoms([2]);

    // when
    const app = new App();
    const result = app.randomIndex();

    //then
    expect(result).toEqual(0);
  }),

  test('라운드 실행', () => {
    //given
    const carInfo = {
      pobi: 1,
      test: 2,
    }
    const outputs = [
      'pobi : -',
      'test : --',
    ];
    const logSpy = getLogSpy();

    // when
    const app = new App();
    app.playRound(carInfo);
  
    //then
    outputs.forEach((outputs) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(outputs));
    });
  });

  test('우승자 추려내기', () => {
    // given
    const nameToNumberMap = {
      'pobi': 3,
      'test': 2,
      'hi': 4,
    };
  
    // when
    const app = new App();
    const result = app.findWinners(nameToNumberMap);
  
    // then
    expect(result).toEqual(['hi']);
  });

  test('공동 우승자 추려내기', () => {
    // given
    const nameToNumberMap = {
      'pobi': 4,
      'test': 2,
      'hi': 4,
    };
  
    // when
    const app = new App();
    const result = app.findWinners(nameToNumberMap);
  
    // then
    expect(result).toEqual(['pobi', 'hi']);
  });
});