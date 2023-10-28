import { defaultErrorHandler } from '../src/util/error/errorhandler';
import { consoleInput, consolePrint } from '../src/util/libraryFeatures/consoleHandler';
import { checkRaceCountValid } from '../src/util/ready/checkInputValid';
import receiveGameCount from '../src/util/ready/receiveGameCount';

const mockReceiveGameCount = async (input, text) => {
  try {
    await consolePrint(text);
    const isValid = await checkRaceCountValid(input);

    const validCount = isValid;
    return validCount;
  } catch (error) {
    defaultErrorHandler(error);
    return null;
  }
};

describe('자동자 경주 게임 경기 횟수 테스트', () => {
  test('입력값의 처리 성공', async () => {
    const consoleText = '시도할 횟수는 몇 회인가요? \n';
    const input = '9';
    const result = 9;

    const a = mockReceiveGameCount(input, consoleText);

    expect(await mockReceiveGameCount(input, consoleText)).toEqual(result);
  });
});
