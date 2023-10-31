import App from '../src/App';
import { MissionUtils } from '@woowacourse/mission-utils';

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

describe('내 기능 테스트', () => {
  test('자동차 이름 목록에서 하나라도 5자가 초과되면 예외 발생', () => {
    // given
    const input = [ 'pobi', 'test', 'Jwirang' ];

    // when
    const app = new App();
    const fn = () => app.validateCarNames(input)

    // then
    expect(fn).toThrowError('[ERROR] 이름은 5글자 이하로만 입력할 수 있습니다.');
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
    await expect(app.getPlayCount()).rejects.toThrowError('[ERROR] 값이 잘 못 입력되었습니다.');
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

  test('상태 업데이트', () => {
    //given
    const nameToNumberMap = {
      'pobi': 3,
      'test': 2,
      'hi': 4,
    };
  
    // when
    const app = new App();
    app.playRound(nameToNumberMap);
  
    //the
    expect(nameToNumberMap['pobi']).toBeGreaterThanOrEqual(3);
    expect(nameToNumberMap['test']).toBeGreaterThanOrEqual(2);
    expect(nameToNumberMap['hi']).toBeGreaterThanOrEqual(4);
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