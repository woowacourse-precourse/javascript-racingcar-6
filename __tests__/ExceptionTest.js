import App from '../src/App.js';
import { Console } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('입력값 검증 테스트', () => {
  test('입력값이 없으면 에러 발생', async () => {
    const inputs = [''];

    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR] 입력값이 없습니다.');
  });

  test('문자열에 공백이 포함되면 에러 발생', async () => {
    const inputs = [
      'first, second, third',
      'first, second,third ',
      '  first,second, third',
    ];

    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      '[ERROR] 입력값에 공백이 포함되었습니다.'
    );
  });

  test('자동차 수가 2대 미만이면 에러 발생', async () => {
    const inputs = ['first', 'first,', 'first,,'];

    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      '[ERROR] 자동차는 최소 2대여야합니다.'
    );
  });

  test('자동차 이름 중복이 있으면 에러 발생', async () => {
    const inputs = ['first,first', 'qwer,qwer,asdf'];

    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      '[ERROR] 중복된 자동차가 존재합니다.'
    );
  });

  test('자동차들 중 한 대라도 이름의 길이가 5를 초과하면 에러 발생', async () => {
    const inputs = ['first,second,third', 'abcdef,abc'];

    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      '[ERROR] 각 자동차명의 길이는 최대 5자입니다.'
    );
  });
});
