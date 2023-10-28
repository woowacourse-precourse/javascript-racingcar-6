import { MissionUtils } from '@woowacourse/mission-utils';
import Input from '../src/utils/Input';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('값 입력 테스트', () => {
  test('입력 문구 출력', () => {
    const logSpy = getLogSpy();
    const input = new Input();

    input.carNameInput();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
      )
    );
  });
});
