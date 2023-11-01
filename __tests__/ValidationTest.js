import { MissionUtils } from "@woowacourse/mission-utils";
import App from '../src/App';

const mockQuestions = inputs => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

describe('자동차 경주 게임: 플레이어 입력 유효성 검사 예외 처리', () => {
    test('플레이어 이름 숫자 포함', async () => {
      // given
      const inputs = ['pobi,juni2'];
      mockQuestions(inputs);
  
      // when
      const app = new App();
  
      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    });
  
    test('플레이어 이름에 영어가 아닌 문자 포함', async () => {
      // given
      const inputs = ['pobi#,juni'];
      mockQuestions(inputs);
  
      // when
      const app = new App();
  
      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    });
  
    test('플레이어 이름 중복', async () => {
      // given
      const inputs = ['pobi,pobi'];
      mockQuestions(inputs);
  
      // when
      const app = new App();
  
      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    });
  });
  
  describe('자동차 경주 게임: 시도 횟수 입력 유효성 검사 예외 처리', () => {
    test('시도 횟수에 문자 입력', async () => {
      // given
      const inputs = ['pobi,woni', 'a'];
      mockQuestions(inputs);
  
      // when
      const app = new App();
  
      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    });
  
    test('시도 횟수에 0 입력', async () => {
      // given
      const inputs = ['pobi,woni', '0'];
      mockQuestions(inputs);
  
      // when
      const app = new App();
  
      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    });
  
    test('시도 횟수에 음수 입력', async () => {
      // given
      const inputs = ['pobi,woni', '-3'];
      mockQuestions(inputs);
  
      // when
      const app = new App();
  
      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    });
  });