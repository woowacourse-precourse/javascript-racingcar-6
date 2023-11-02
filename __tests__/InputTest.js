import { MissionUtils } from '@woowacourse/mission-utils';
import { inputCarNames, inputAttemptNumber } from '../src/utils/inputUser';

describe('사용자 입력 테스트', () => {
  test('자동차 이름 입력 정상 동작', async () => {
    const input = 'pobi,woni,jun';
    const output = ['pobi', 'woni', 'jun'];

    const mockedInput = jest.spyOn(MissionUtils.Console, 'readLineAsync');
    mockedInput.mockResolvedValue(input);

    const result = await inputCarNames();

    expect(result).toEqual(output);
  });

  test('길이가 0인 자동차 이름 입력 오류 ', async () => {
    const input = 'pobi,';

    const mockedInput = jest.spyOn(MissionUtils.Console, 'readLineAsync');
    mockedInput.mockResolvedValue(input);

    await expect(inputCarNames()).rejects.toThrow('[ERROR] 빈 이름입니다.');
  });

  test('이름 중 공백 이름이 있을때 입력 오류', async () => {
    const input = 'pobi, ,jun';

    const mockedInput = jest.spyOn(MissionUtils.Console, 'readLineAsync');
    mockedInput.mockResolvedValue(input);

    await expect(inputCarNames()).rejects.toThrow('[ERROR] 빈 이름입니다.');
  });

  test('이름 중 공백 문자가 있을 때 오류', async () => {
    const input = 'pobi, jun';

    const mockedInput = jest.spyOn(MissionUtils.Console, 'readLineAsync');
    mockedInput.mockResolvedValue(input);

    await expect(inputCarNames()).rejects.toThrow(
      '[ERROR] 이름에 공백이 있습니다.',
    );
  });

  test('길이가 5를 넘기는 자동차 이름 입력 오류 ', async () => {
    const input = 'pobi,woniwo';

    const mockedInput = jest.spyOn(MissionUtils.Console, 'readLineAsync');
    mockedInput.mockResolvedValue(input);

    await expect(inputCarNames()).rejects.toThrow(
      '[ERROR] 이름은 5자 이하만 가능합니다.',
    );
  });

  test('움직이는 시도가 정수가 아닌 때 오류', async () => {
    const input = 'not Integer';

    const mockedInput = jest.spyOn(MissionUtils.Console, 'readLineAsync');
    mockedInput.mockResolvedValue(input);

    await expect(inputAttemptNumber()).rejects.toThrow(
      '[ERROR] 시도할 횟수는 정수만 가능합니다.',
    );
  });
});
