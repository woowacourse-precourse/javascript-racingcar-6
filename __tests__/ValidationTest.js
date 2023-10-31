import { Console } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = inputs => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('vehicle 입력 값 Validation 관련 예외 처리', () => {
  test('test1: 입력 값이 비어있을 경우', async () => {
    // given
    const input = [''];
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR] 입력 값이 없습니다.');
  });

  test('test2: 입력 값에 공백이 섞여있을 경우', async () => {
    // given
    const input = ['min, gyu'];
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(
      '[ERROR] 자동차 목록은 공백 없이 영문자와 쉼표만 사용하여 입력해주세요.',
    );
  });

  test('test3: 입력 값에 영문자와 쉼표가 아닌 다른 문자를 사용했을 경우', async () => {
    // given
    const input = ['min?,gyu'];
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(
      '[ERROR] 자동차 목록은 공백 없이 영문자와 쉼표만 사용하여 입력해주세요.',
    );
  });

  test('test4: 입력 값에 쉼표가 연속해서 사용될 경우', async () => {
    // given
    const input = ['min,,gyu'];
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(
      '[ERROR] 자동차 이름 사이에 쉼표를 한개만 입력해주세요.',
    );
  });

  test('test5: 각 자동차의 이름이 5글자 이상인 경우', async () => {
    // given
    const input = ['min,gyu,wooteco'];
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(
      '[ERROR] 각 자동차의 이름은 5자 이하로 입력해주세요.',
    );
  });

  test('test6: 각 자동차의 이름이 중복된 경우', async () => {
    // given
    const input = ['min,gyu,min'];
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(
      '[ERROR] 각 자동차의 이름이 중복되지 않도록 입력해주세요.',
    );
  });

  test('test7: 자동차가 한 개만 입력된 경우', async () => {
    // given
    const input = ['min'];
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(
      '[ERROR] 두 개 이상의 자동차를 입력해주세요.',
    );
  });
});

describe('round 입력 값 Validation 관련 예외 처리', () => {
  test('test1: 입력 값이 비어있을 경우', async () => {
    // given
    const input = ['min,gyu', ''];
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR] 입력 값이 없습니다.');
  });

  test('test2: 입력 값에 숫자 외 다른 값이 입력된 경우', async () => {
    // given
    const input = ['min,gyu', 'ten'];
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(
      '[ERROR] 시도할 횟수는 숫자로 입력해주세요.',
    );
  });
});
