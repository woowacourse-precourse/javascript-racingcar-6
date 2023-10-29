import { defaultErrorHandler } from '../src/util/error/errorhandler';
import { consolePrint } from '../src/util/libraryFeatures/MissionUtilsHandler.js';
import { checkCarNameValid } from '../src/util/ready/checkInputValid';

const mockReciveCarName = async (inputValue, text) => {
  try {
    await consolePrint(text);
    const input = inputValue;
    const carList = await checkCarNameValid(input);
    return carList;
  } catch (error) {
    const promise = defaultErrorHandler(error);
    return promise;
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

  test('valid 검사를 통과 못하는 입력값일 경우 error code에 해당하는 Error를 발생', async () => {
    // given
    const consoleText = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
    const input = 'aaaaaaaa,qqqqqqqq,zzzzzzzzzz';
    const result = '자동차의 이름이 너무 깁니다';

    // then
    await expect(() => mockReciveCarName(input, consoleText).rejects.toThrow(result));
  });
});
