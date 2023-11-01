import { MissionUtils } from '@woowacourse/mission-utils';
import User, {
  inputNumberOfAttempts,
  inputParticipantCarName,
  validNumberOfAttempts,
} from '../src/User.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs;
    return Promise.resolve(input);
  });
};

describe('사용자 입력 테스트', () => {
  test('split 메서드로 주어진 값을 구분', async () => {
    const inputs = 'obi,hi';

    mockQuestions(inputs);
    const result = await inputParticipantCarName();
    await expect(result).toEqual(['obi', 'hi']);
  });

  test('split 메서드로 주어진 값을 구분(공백제거)', async () => {
    const inputs = 'pobi, ahi';

    mockQuestions(inputs);
    const result = await inputParticipantCarName();
    await expect(result).toEqual(['pobi', 'ahi']);
  });

  test('User 객체에 사용자 이름 설정 테스트', async () => {
    const inputs = 'pobi, hi';

    mockQuestions(inputs);
    const inputUserList = await inputParticipantCarName();
    const userList = new User(inputUserList);
    await expect(userList).toEqual({
      nameList: ['pobi', 'hi'],
      carsMovingPoint: [0, 0],
    });
  });

  test('시도할 횟수 사용자 입력 테스트', async () => {
    const inputs = 20;

    mockQuestions(inputs);
    const userInput = await inputNumberOfAttempts();
    await expect(userInput).toEqual(20);
  });

  test('시도할 횟수 사용자 입력 테스트', async () => {
    const inputs = 20;

    mockQuestions(inputs);
    const userInput = await inputNumberOfAttempts();
    await expect(userInput).toEqual(20);
  });

  test('시도할 횟수 사용자 입력 테스트 예외처리', async () => {
    const inputs = 21;

    mockQuestions(inputs);
    const userInput = await inputNumberOfAttempts();

    await expect(validNumberOfAttempts(userInput)).rejects.toThrow('[ERROR]');
  });
});
