import { defaultErrorHandler, gameErrorhandler } from '../src/util/error/errorhandler';
import { consolePrint } from '../src/util/libraryFeatures/consoleHandler';
import { checkCarValid } from '../src/util/ready/checkInputValid';

const mockReciveCarName = async (inputValue, text) => {
  try {
    await consolePrint(text);
    const input = inputValue;
    const carList = await checkCarValid(input);
    console.log(carList);
    return carList;
  } catch (error) {
    defaultErrorHandler(error);
    throw error;
  }
};

describe('자동차 경주 게임 입력 테스트', () => {
  test('입력값의 처리 성공', async () => {
    // given
    const consoleText = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
    const input = 'asdf,qwer,zxcv';
    const result = ['asdf', 'qwer', 'zxcv'];

    // when
    const carNames = await mockReciveCarName(input, consoleText);

    // then
    expect(carNames).toEqual(result);
  });
});
