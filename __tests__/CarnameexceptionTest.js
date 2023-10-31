import App from '../src/App';
import { mockQuestions } from './ApplicationTest';

describe('자동차 스트링 예외처리', () => {
  test('5글자가 넘는 이름은 예외로 처리', async () => {
    const input = ['cake,apple,banana'];
    mockQuestions(input);
    const app = new App();
    const result = app.handleInputName();
    expect(result).rejects.toThrow('[ERROR]');
  });

  test('중복된 이름 예외로 처리', () => {
    const input = ['cake,caake,cake'];
    mockQuestions(input);
    const app = new App();
    const result = app.handleInputName();
    expect(result).rejects.toThrow(
      '[ERROR] : 중복된 이름은 사용할 수 없습니다.',
    );
  });
});
