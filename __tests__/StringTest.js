import { MissionUtils } from '@woowacourse/mission-utils';
import { inputParticipantCarName } from '../src/User.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs;
    return Promise.resolve(input);
  });
};

describe('문자열 테스트', () => {
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
});

// test('split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환', () => {
//   const input = '1';
//   const result = input.split(',');

//   expect(result).toContain('1');
// });

// test('substring 메서드로 특정 구간 값을 반환', () => {
//   const input = '(1,2)';
//   const result = input.substring(1, 4);

//   expect(result).toEqual('1,2');
// });

// test('at 메서드로 특정 위치의 문자 찾기', () => {
//   const input = 'abc';
//   const result = input.at(0);

//   expect(result).toEqual('a');
// });
// });
